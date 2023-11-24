import { createTRPCRouter, protectedProcedure } from "../trpc";


export const reviewRouter = createTRPCRouter({
    create: protectedProcedure
})