import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SearchBar from './search-bar'

export default function HomeLayout({
	params,
	searchParams,
	children,
}: {
	params: { slug: string }
	searchParams: Record<string, string | string[] | undefined>
	children: React.ReactNode
}) {
	return (
		<div className="min-h-screen w-full">
			<SearchBar searchParams={searchParams} />
			{children}
		</div>
	)
}
