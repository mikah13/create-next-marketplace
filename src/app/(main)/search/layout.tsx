import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SearchBar from './search-bar'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen w-full">
			<SearchBar />
			{children}
		</div>
	)
}
