import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

import { products } from "@/server/db/schema";

export const productRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(products).values({
        name: "Some product",
        description: "This is some product",
        price: 3.14,
        quantity: 1,
        sellerId: "d88815ee-acc2-4c4d-9c00-e96be0c60af2",
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.products.findMany({
      orderBy: (products, { desc }) => [desc(products.createdAt)],
    });
  }),
});
