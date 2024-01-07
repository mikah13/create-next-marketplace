import Hero from '@/components/Hero'
import ForSale from '@/components/ForSale'
import Housing from '@/components/Housing'
// import Event from '@/components/Event'
import Forums from '@/components/Forums'
import Testimonial from '@/components/Testimonial'
import NavigationBar from '@/components/NavigationBar'

export default function Home() {
	return (
		<main>
			<NavigationBar />

			<Hero />

			<ForSale />
			<Housing />
			{/* <Event /> */}
			<Forums />
			<Testimonial />
		</main>
	)
}
