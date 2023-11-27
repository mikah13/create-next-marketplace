import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { categories } from "../../db/schema";
import { z } from "zod";
import { response } from ".";
import { eq } from "drizzle-orm";

export const TCategoryObject = z.object({
  name: z.string().min(1),
  topicId: z.string().min(1),
});
export const categoryRouter = createTRPCRouter({
  create: protectedProcedure
    .input(TCategoryObject)
    .mutation(async ({ ctx, input }) => {
      const newCategory = await ctx.db.insert(categories).values({
        ...input,
      });
      return newCategory.insertId;
    }),

  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const deleteCategory = await ctx.db
        .delete(categories)
        .where(eq(categories.id, Number(input.id)));
      return response("record successfully deleted");
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.categories.findMany({
      orderBy: (categories, { desc }) => [desc(categories.createdAt)],
    });
  }),
});
