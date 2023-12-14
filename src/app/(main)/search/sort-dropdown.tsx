'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const sorts = [
	{
		value: 'nuxt.js',
		label: 'Latest',
	},
	{
		value: 'remix',
		label: 'Oldest',
	},
	{
		value: 'next.js',
		label: 'Title Ascending',
	},
	{
		value: 'sveltekit',
		label: 'Title Descending',
	},
]
type Props = {
	sort: string
	sortType: string
}
export function SortDropdown({ sort, sortType }: Props) {
	const [open, setOpen] = React.useState(false)
	const [value, setValue] = React.useState('')

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button variant="outline" role="combobox" aria-expanded={open} className="w-52 justify-between">
					{value ? sorts.find((sort) => sort.value === value)?.label : 'Sort By'}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-52 p-0">
				<Command>
					<CommandInput placeholder="Sort By" />
					<CommandEmpty>No option found.</CommandEmpty>
					<CommandGroup>
						{sorts.map((sort) => (
							<CommandItem
								key={sort.value}
								value={sort.value}
								onSelect={(currentValue) => {
									setValue(currentValue === value ? '' : currentValue)
									setOpen(false)
								}}>
								<Check
									className={cn('mr-2 h-4 w-4', value === sort.value ? 'opacity-100' : 'opacity-0')}
								/>
								{sort.label}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
