'use client'

import { useSearchParams } from 'next/navigation'

export default function Page() {
	const searchParams = useSearchParams()

	const search = searchParams.get('query')

	if (!search || search.trim() === '') {
		return 'please enter a search'
	}
	return <>Search: {search}</>
}
