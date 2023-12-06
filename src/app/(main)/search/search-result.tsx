import BasicCard from '@/components/card/BasicCard'
import { api } from '@/trpc/server'
import React from 'react'
import { SortDropdown } from './sort-dropdown'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import SearchFilterDropdown from './search-filter-dropdown'

type Props = {
	query: string
}

const SearchResult = async ({ query }: Props) => {
	const results = await api.product.search.query({
		query,
	})
	return (
		<div className="mt-6">
			<p className="font-medium">
				{results?.length || 0} results found for {query}
			</p>
			<div className="mt-2 sm:flex sm:items-center sm:justify-between">
				<div className="block sm:hidden">
					<button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
						<span className="text-sm font-medium"> Filters & Sorting </span>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-4 w-4 rtl:rotate-180">
							<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
						</svg>
					</button>
				</div>

				<div className="hidden sm:flex sm:gap-4">
					<div className="relative">
						<SearchFilterDropdown title={'Filter'} options={[12, 12]} />
					</div>
				</div>

				<div className="hidden sm:block">
					<SortDropdown />
				</div>
			</div>
			<div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
				{results &&
					results.length > 0 &&
					results.map((product) => {
						const { name, image, price, categoryId } = product

						return (
							<div key={product.id} className="mx-auto">
								<BasicCard price={price} title={name} categoryId={parseInt(categoryId)} />
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default SearchResult
