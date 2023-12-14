import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from 'next/image'
import CustomLink from '../ui/link'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Bookmark, Star } from 'lucide-react'
import { Separator } from '../ui/separator'
import { TProduct } from '@/server/api/routers/product'

type Props = {
	className?: string
	product: TProduct
	bookmark?: boolean
	bathroom?: number
	bedroom?: number
}

const HouseCard = ({ className, product, bookmark = false }: Props) => {
	if (!product) return <></>
	return (
		<Card className={cn(' lg:max-w-64 col-span-1  mx-auto h-64  w-full border-none shadow-none ', className)}>
			<CardHeader className="relative h-48 w-full rounded-lg bg-[url('https://plus.unsplash.com/premium_photo-1661964475795-f0cb85767a88')] bg-cover bg-center bg-no-repeat object-cover">
				<Badge variant={'secondary'} className="absolute bottom-2 right-2">
					${product.price}
				</Badge>
			</CardHeader>
			<CardContent className="border-none px-0 pt-2">
				<CustomLink className="cursor-pointer text-lg font-medium text-black hover:text-blue-900">
					{product.name}
				</CustomLink>
				{/* <div className="flex h-5 flex-row items-center ">
					<span className="text-md text-gray-600">0 bathroom</span>{' '}
					<Separator orientation="vertical" className="mx-2 h-4  justify-center text-blue-900" />{' '}
					<span className="text-md text-gray-600">0 bedroom</span>
				</div> */}
			</CardContent>
		</Card>
	)
}

export default HouseCard
