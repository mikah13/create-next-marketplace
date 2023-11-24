import { createTRPCRouter, publicProcedure } from "../trpc";
import { categories } from "../../db/schema";

export const categoryRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.categories.findMany({
      orderBy: (categories, { desc }) => [desc(categories.createdAt)],
    });
  }),
});
