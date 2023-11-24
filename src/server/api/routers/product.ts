import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

import { productImages, products } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { response } from "./index";
import { users } from "../../db/schema";
const PRODUCTS_PER_PAGE = 20;
export const TProductObject = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.number().nonnegative(),
  quantity: z.number().nonnegative(),
  isPublished: z.boolean(),
  images: z.array(z.string()).optional(),
  productId: z.string().optional(),
});

export const productRouter = createTRPCRouter({
  update: protectedProcedure
    .input(TProductObject)
    .mutation(async ({ ctx, input }) => {
      const { productId } = input;
      if (productId !== undefined) {
        const updateProduct = await ctx.db
          .update(products)
          .set({ ...input })
          .where(eq(products.id, Number(productId)));
        return updateProduct;
      }
      return response("No record found");
    }),

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

  getAll: publicProcedure
    .input(
      z.object({
        isPublished: z.boolean().default(true),
        page: z.number().default(1),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.query.products.findMany({
        where: (products, { eq }) =>
          eq(products.isPublished, input.isPublished),
        orderBy: (products, { desc }) => [desc(products.createdAt)],
        offset: input.page * PRODUCTS_PER_PAGE,
        limit: PRODUCTS_PER_PAGE,
      });
    }),

  getProductByUser: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        isPublished: z.boolean().default(true),
        page: z.number().default(1),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.query.products.findMany({
        where: (products, { eq }) =>
          eq(products.sellerId, input.userId) &&
          eq(products.isPublished, input.isPublished),
        orderBy: (products, { desc }) => [desc(products.createdAt)],
        offset: input.page * PRODUCTS_PER_PAGE,
        limit: PRODUCTS_PER_PAGE,
      });
    }),
});
