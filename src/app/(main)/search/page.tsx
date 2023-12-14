import { useSearchParams } from 'next/navigation'
import SearchResult from './search-result'
import Breadcrumb from '@/components/ui/breadcrumb'

export default function Page({
	params,
	searchParams,
}: {
	params: { slug: string }
	searchParams: Record<string, string | string[] | undefined>
}) {
	// if (!query || query.trim() === '') {
	// 	return <h1>please enter a search</h1>
	// }

	return (
		<>
			<section>
				<div className="mx-auto max-w-screen-4xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
					<header>
						<Breadcrumb
							links={[
								{ href: '/', label: 'Home' },
								{ href: '/#', label: 'Summary' },
							]}
						/>
					</header>

					<SearchResult searchParams={searchParams} />
				</div>
			</section>
		</>
	)
}
