import { z } from 'zod';
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';

import { categories, productImages, products } from '@/server/db/schema';
import { eq, like, sql } from 'drizzle-orm';
import { response } from './index';

const PRODUCTS_PER_PAGE = 20;
export const TProductObject = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.number().nonnegative(),
  quantity: z.number().nonnegative(),
  isPublished: z.boolean(),
  images: z.array(z.string()).optional(),
  productId: z.string().optional(),
  categoryId: z.string(),
});

export const productRouter = createTRPCRouter({
  update: protectedProcedure.input(TProductObject).mutation(async ({ ctx, input }) => {
    const { productId } = input;
    if (productId !== undefined) {
      const updateProduct = await ctx.db
        .update(products)
        .set({ ...input })
        .where(eq(products.id, Number(productId)));
      return updateProduct;
    }
    return response('No record found');
  }),

  create: protectedProcedure.input(TProductObject).mutation(async ({ ctx, input }) => {
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

  delete: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const deleteItem = await ctx.db
        .delete(products)
        .where(eq(products.id, Number(input.id)) && eq(products.sellerId, userId));
      return response('record successfully deleted');
    }),
  search: publicProcedure.input(z.object({ query: z.string() })).query(async ({ ctx, input }) => {
    const { query } = input;
    const result = await ctx.db
      .select()
      .from(products)
      .where(like(products.name, `%${query}%`) || like(products.description, `%${query}%`));

    return result;
  }),
  getAll: publicProcedure
    .input(
      z.object({
        isPublished: z.boolean().default(true),
        page: z.number().default(0),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.query.products.findMany({
        where: (products, { eq }) => eq(products.isPublished, input.isPublished),
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
        page: z.number().default(0),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.query.products.findMany({
        where: (products, { eq }) => eq(products.sellerId, input.userId) && eq(products.isPublished, input.isPublished),
        orderBy: (products, { desc }) => [desc(products.createdAt)],
        offset: input.page * PRODUCTS_PER_PAGE,
        limit: PRODUCTS_PER_PAGE,
      });
    }),
});
