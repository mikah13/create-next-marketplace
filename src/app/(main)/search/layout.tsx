import SearchBar from './search-bar'

export default function HomeLayout({
	children,
}: {
	params: { slug: string }
	searchParams: Record<string, string | string[] | undefined>
	children: React.ReactNode
}) {
	return (
		<div className="min-h-screen w-full">
			<SearchBar />
			{children}
		</div>
	)
}
