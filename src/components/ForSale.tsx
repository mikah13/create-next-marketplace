import React, { useState } from 'react'
import CustomLink from './ui/link'
import { ScrollArea } from './ui/scroll-area'
import { Button } from './ui/button'
import { api } from '@/trpc/server'
type Props = {}

const ForSale = async (props: Props) => {
	const categories = await api.category.getCategoryByTopic.query({ topic: 'For Sale' })
	if (!categories || categories?.length === 0) return <></>

	return (
		<section className="mx-auto max-w-7xl px-6 py-3">
			<div className="flex justify-between py-8">
				<h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">For Sale</h2>
				<CustomLink>View All</CustomLink>
			</div>

			<div className="grid h-96 grid-cols-5 space-x-8">
				<div className="col-span-5 sm:col-span-1">
					<ScrollArea className="h-96">
						<div className="flex flex-col space-y-2">
							{categories.map((category, index) => (
								<Button key={index} variant={'secondary'} className="py-6">
									{category.name}
								</Button>
							))}
						</div>
					</ScrollArea>
				</div>
				<ScrollArea className="hidden h-96 w-full sm:col-span-4 sm:block ">
					<div className="grid h-96 grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"></div>
				</ScrollArea>
			</div>
		</section>
	)
}

export default ForSale
