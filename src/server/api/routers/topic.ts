import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'
import { categories } from '../../db/schema'
import { z } from 'zod'
import { response } from '.'
import { eq } from 'drizzle-orm'

export const TTopicObject = z.object({
	name: z.string().min(1),
})

export const topicRouter = createTRPCRouter({
	getTopicById: publicProcedure
		.input(
			z.object({
				id: z.number(),
			})
		)
		.query(async ({ ctx, input }) => {
			return ctx.db.query.topics.findFirst({
				where: (topics, { eq }) => eq(topics.id, input.id),
			})
		}),
	getTopicByName: publicProcedure
		.input(
			z.object({
				name: z.string().min(1),
			})
		)
		.query(async ({ ctx, input }) => {
			return ctx.db.query.topics.findMany({
				where: (topics, { eq }) => eq(topics.name, input.name),
				orderBy: (topics, { desc }) => [desc(topics.createdAt)],
				limit: 20,
			})
		}),

	getAll: publicProcedure.query(({ ctx }) => {
		return ctx.db.query.topics.findMany({
			orderBy: (topics, { desc }) => [desc(topics.createdAt)],
			limit: 20,
		})
	}),
})
