'use client'

import React, { useEffect, useState } from 'react'
import CustomLink from './ui/link'
import { ScrollArea } from './ui/scroll-area'
import { Button } from './ui/button'
import { api } from '@/trpc/react'
import BasicCard from './card/BasicCard'

const ForSaleProducts = ({ categoryId }: { categoryId: number }) => {
	const { data, error } = api.product.getProductByCategoryId.useQuery({ categoryId })
	if (error) return <></>
	if (!data) return <></>
	return data.map((product, idx) => (
		<BasicCard
			categoryId={categoryId}
			title={product.name}
			description={product.description}
			id={`${product.id}`}
			price={product.price}
			key={idx}
		/>
	))
}

const ForSale = () => {
	const [selected, setSelected] = useState<number>(0)
	const { data, error } = api.category.getCategoryByTopic.useQuery({ topic: 'For Sale' })

	// if (!categories || categories?.length === 0) return <></>
	// if (fetching) return <></>
	if (error) return <></>
	if (!data) return <></>
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
							{data.map((category, index) => (
								<Button
									key={index}
									variant={selected === index ? 'secondary' : 'ghost'}
									className="py-6"
									onClick={() => {
										setSelected(index)
									}}>
									{category.name}
								</Button>
							))}
						</div>
					</ScrollArea>
				</div>
				<ScrollArea className="hidden h-96 w-full sm:col-span-4 sm:block ">
					<div className="grid h-96 grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						{data?.[selected] && <ForSaleProducts categoryId={data[selected].id} />}
					</div>
				</ScrollArea>
			</div>
		</section>
	)
}

export default ForSale
