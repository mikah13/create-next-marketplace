import { useSearchParams } from 'next/navigation'
import SearchResult from './search-result'

export default function Page({
	params,
	searchParams,
}: {
	params: { slug: string }
	searchParams: Record<string, string | string[] | undefined>
}) {
	const query = searchParams.query as string

	if (!query || query.trim() === '') {
		return <h1>please enter a search</h1>
	}
	
	return (
		<>
			<SearchResult query={query} />
		</>
	)
}
