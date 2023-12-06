import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { SearchBarDropdown } from './search-bar-dropdown'

type Props = {}

const SearchBar = (props: Props) => {
	return (
		<div className="flex flex-row h-16 w-full items-center  border p-0">
			<div className="flex order-last items-center flex-row justify-evenly space-x-2 h-full  px-2">
				<Button variant="outline">Save Search</Button>
				<Button variant="outline">Save Search</Button>
				<Button variant="outline">Save Search</Button>
			</div>
			<form className="flex flex-row flex-grow h-full px-2 items-center border-r-2">
				<SearchBarDropdown />

				<Input className="w-1/2" placeholder="Search" />

				<Button className="ml-1">Search</Button>
			</form>
		</div>
	)
}

export default SearchBar
