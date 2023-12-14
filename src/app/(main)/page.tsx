import Link from 'next/link'

import { getServerAuthSession } from '@/server/auth'
import { api } from '@/trpc/server'
import { CreateProduct } from '../_components/create-product'
import Hero from '@/components/Hero'
import ForSale from '@/components/ForSale'
import Housing from '@/components/Housing'
import Event from '@/components/Event'
import Forums from '@/components/Forums'
import Testimonial from '@/components/Testimonial'
import NavigationBar from '@/components/NavigationBar'

export default async function Home() {
	// const hello = await api.post.hello.query({ text: "from tRPC" });
	const session = await getServerAuthSession()

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
