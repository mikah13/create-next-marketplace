import { cn } from '@/lib/utils'
import Link from 'next/link'
import { JSX, SVGProps } from 'react'

type TBreadcrumbLink = {
	href: string
	label: string
}
export default function Breadcrumb({ links }: { links?: TBreadcrumbLink[] }) {
	return (
		<div className="flex  flex-row space-x-2 items-center">
			{links?.map((link, index) => (
				<div key={index} className="flex flex-row">
					<Link
						className={cn(
							'text-sm font-medium ',
							index === links.length - 1
								? 'text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
								: 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
						)}
						href={link.href}>
						{link.label}
					</Link>
					{index !== links.length - 1 && (
						<IconChevronRight className="h-5 w-5 text-gray-500 dark:text-gray-400" />
					)}
				</div>
			))}
		</div>
	)
}

function IconChevronRight(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="m9 18 6-6-6-6" />
		</svg>
	)
}
