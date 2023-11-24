import { productImages } from "@/server/db/schema";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { response } from ".";
import { eq } from "drizzle-orm";

export const productImageRouter = createTRPCRouter({
  getByProductId: publicProcedure
    .input(
      z.object({
        productId: z.string(),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.query.productImages.findMany({
        where: (images, { eq }) => eq(images.productId, input.productId),
        orderBy: (productImages, { desc }) => [desc(productImages.createdAt)],
      });
    }),

  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const deleteItem = await ctx.db
        .delete(productImages)
        .where(eq(productImages.id, Number(input.id)));
      return response("record successfully deleted");
    }),
});
