import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { reviews } from "@/server/db/schema";

export const TReviewObject = z.object({
  productId: z.number().min(1),
  reviewerId: z.number().min(1),
  rating: z.number().min(1).max(5),
  comment: z.string().min(1),
});

export const reviewRouter = createTRPCRouter({
  create: protectedProcedure
    .input(TReviewObject)
    .mutation(async ({ ctx, input }) => {
      const createReview = await ctx.db
        .insert(reviews)
        .values({ ...input })
        .execute();
      return createReview;
    }),
});
