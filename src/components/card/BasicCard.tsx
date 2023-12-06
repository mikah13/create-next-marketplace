import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from 'next/image'
import CustomLink from '../ui/link'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Bookmark, Star } from 'lucide-react'
import { api } from '@/trpc/server'

type Props = {
	className?: string
	title?: string
	description?: string | null
	image?: string
	price?: number
	id?: string
	bookmark?: boolean
	categoryId: number
}

const BasicCard = async ({ className, categoryId, title, description, image, price, id, bookmark = false }: Props) => {
	const category = await api.category.getCategoryById.query({ id: categoryId })

	return (
		<Card className={cn('lg:max-w-64 col-span-1  mx-auto h-64  w-full border-none shadow-none ', className)}>
			<CardHeader className="relative h-48 w-48 mx-auto rounded-lg bg-[url('https://images.unsplash.com/photo-1434389677669-e08b4cac3105')] bg-cover bg-center bg-no-repeat object-cover">
				<Badge variant={'secondary'} className="absolute bottom-2 right-2">
					${price}
				</Badge>
			</CardHeader>
			<CardContent className="border-none px-0 pt-2">
				<CustomLink className="cursor-pointer text-lg font-medium text-black hover:text-blue-900">
					{title}
				</CustomLink>

				{category && <p className="text-md text-gray-600">{category.name}</p>}
				{/* {description && <p className="text-md text-gray-600">{description}</p>} */}
			</CardContent>
		</Card>
	)
}

export default BasicCard
