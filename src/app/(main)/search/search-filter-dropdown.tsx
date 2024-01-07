import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import React from 'react'

type Props = {
	title: string
	options: unknown[]
}

const SearchFilterDropdown = ({ title, options }: Props) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline" size="sm" className="h-8">
					{title}
				</Button>
			</PopoverTrigger>
			<PopoverContent>Place content for the popover here.</PopoverContent>
		</Popover>
	)
}

export default SearchFilterDropdown
