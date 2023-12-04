import BasicCard from '@/components/card/BasicCard'
import { api } from '@/trpc/server'
import React from 'react'
type Props = {
	query: string
}

const SearchResult = async ({ query }: Props) => {
	const results = await api.product.search.query({
		query,
	})
	console.log(results)
	return (
		<div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-center">
			{results.map((product) => {
				const { name, description, image, price } = product
				return (
					<div key={product.id} className="mx-auto">
						<BasicCard price={price} title={name} />
						
					</div>
				)
			})}
		</div>
	)
}

export default SearchResult
