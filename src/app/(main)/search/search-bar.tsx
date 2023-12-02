import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

type Props = {}

const SearchBar = (props: Props) => {
	return (
		<div className="flex h-16 items-center px-4 border">
			<div className="flex items-center space-x-2">
				<Input className="flex-grow" placeholder="Search" />
				<Button variant="secondary">Search</Button>
			</div>
		</div>
	)
}

export default SearchBar
