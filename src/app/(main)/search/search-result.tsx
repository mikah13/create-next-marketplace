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
		<div>
			{query}

			{results.map((product) => {
				const { name, description, image, price } = product
				return (
					<div key={product.id}>
						<BasicCard price={price} title={name} description={description} />
					</div>
				)
			})}
		</div>
	)
}

export default SearchResult
