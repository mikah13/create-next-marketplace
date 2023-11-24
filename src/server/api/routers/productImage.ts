import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

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
});
