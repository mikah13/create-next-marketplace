import { createTRPCRouter } from "@/server/api/trpc";
import { productRouter } from "./routers/product";
import { productImageRouter } from "./routers/productImage";
import { categoryRouter } from "./routers/category";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  product: productRouter,
  productImage: productImageRouter,
  category: categoryRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
