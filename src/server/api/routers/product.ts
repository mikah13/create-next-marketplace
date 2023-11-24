import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

import { productImages, products } from "@/server/db/schema";

export const TProductObject = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.number().nonnegative(),
  quantity: z.number().nonnegative(),
  images: z.array(z.string()).optional(),
});

export const productRouter = createTRPCRouter({
  create: protectedProcedure
    .input(TProductObject)
    .mutation(async ({ ctx, input }) => {
      const newProduct = await ctx.db.insert(products).values({
        ...input,
        sellerId: ctx.session.user.id,
      });
      const productId = newProduct.insertId;

      // add images to the product using productId
      if (input.images && input.images.length > 0) {
        input.images.map(async (image) => {
          await ctx.db.insert(productImages).values({
            url: image,
            productId: productId,
          });
        });
      }
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.products.findMany({
      orderBy: (products, { desc }) => [desc(products.createdAt)],
    });
  }),
});
