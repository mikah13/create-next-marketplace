import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

import { products } from "@/server/db/schema";

export const TProductObject = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.number().nonnegative(),
  quantity: z.number().nonnegative(),
});


export const productRouter = createTRPCRouter({
  create: protectedProcedure
    .input(TProductObject)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(products).values({
        ...input,
        sellerId: ctx.session.user.id,
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.products.findMany({
      orderBy: (products, { desc }) => [desc(products.createdAt)],
    });
  }),
});
