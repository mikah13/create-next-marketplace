import { asc, eq } from 'drizzle-orm'
import { db } from '.'
import { categories, products, topics, users } from './schema'
import { faker } from '@faker-js/faker'
const topicsData = ['Community', 'Housing', 'Jobs', 'Services', 'Discussion Forums', 'For Sale', 'Gigs']

const categoriesData = new Map([
	[
		'Community',
		[
			'activities',
			'artists',
			'childcare',
			'classes',
			'events',
			'general',
			'groups',
			'local news',
			'lost+found',
			'missed connections',
			'musicians',
			'pets',
			'politics',
			'rants & raves',
			'rideshare',
			'volunteers',
		],
	],
	[
		'Housing',
		[
			'apts / housing',
			'housing swap',
			'housing wanted',
			'office / commercial',
			'parking / storage',
			'real estate for sale',
			'rooms / shared',
			'rooms wanted',
			'sublets / temporary',
			'vacation rentals',
		],
	],
	[
		'Services',
		[
			'automotive',
			'beauty',
			'cell/mobile',
			'computer',
			'creative',
			'cycle',
			'event',
			'farm+garden',
			'financial',
			'health/well',
			'household',
			'labor/move',
			'legal',
			'lessons',
			'marine',
			'pet',
			'real estate',
			'skilled trade',
			'sm biz ads',
			'travel/vac',
			'write/ed/tran',
		],
	],
	[
		'Discussion Forums',
		[
			'apple',
			'arts',
			'atheist',
			'autos',
			'beauty',
			'bikes',
			'celebs',
			'comp',
			'cosmos',
			'diet',
			'divorce',
			'dying',
			'eco',
			'feedbk',
			'film',
			'fixit',
			'food',
			'frugal',
			'gaming',
			'garden',
			'haiku',
			'help',
			'history',
			'housing',
			'jobs',
			'jokes',
			'legal',
			'manners',
			'marriage',
			'money',
			'music',
			'open',
			'parent',
			'pets',
			'philos',
			'photo',
			'politics',
			'psych',
			'recover',
			'religion',
			'rofo',
			'science',
			'spirit',
			'sports',
			'super',
			'tax',
			'travel',
			'tv',
			'vegan',
			'words',
			'writing',
		],
	],
	[
		'For Sale',
		[
			'antiques',
			'appliances',
			'arts+crafts',
			'atv/utv/sno',
			'auto parts',
			'aviation',
			'baby+kid',
			'barter',
			'beauty+hlth',
			'bike parts',
			'bikes',
			'boat parts',
			'boats',
			'books',
			'business',
			'cars+trucks',
			'cds/dvd/vhs',
			'cell phones',
			'clothes+acc',
			'collectibles',
			'computer parts',
			'computers',
			'electronics',
			'farm+garden',
			'free',
			'furniture',
			'garage sale',
			'general',
			'heavy equip',
			'household',
			'jewelry',
			'materials',
			'motorcycle parts',
			'motorcycles',
			'music instr',
			'photo+video',
			'rvs+camp',
			'sporting',
			'tickets',
			'tools',
			'toys+games',
			'trailers',
			'video gaming',
			'wanted',
			'wheels+tires',
		],
	],
	[
		'Jobs',
		[
			'accounting+finance',
			'admin / office',
			'arch / engineering',
			'art / media / design',
			'biotech / science',
			'business / mgmt',
			'customer service',
			'education',
			'etc / misc',
			'food / bev / hosp',
			'general labor',
			'government',
			'human resources',
			'legal / paralegal',
			'manufacturing',
			'marketing / pr / ad',
			'medical / health',
			'nonprofit sector',
			'real estate',
			'retail / wholesale',
			'sales / biz dev',
			'salon / spa / fitness',
			'security',
			'skilled trade / craft',
			'software / qa / dba',
			'systems / network',
			'technical support',
			'transport',
			'tv / film / video',
			'web / info design',
			'writing / editing',
		],
	],
	['Gigs', ['computer', 'creative', 'crew', 'domestic', 'event', 'labor', 'talent', 'writing']],
])

console.log('SEEDING START : DB TOPICS ======')
console.log('REMOVING : DB TOPICS ======')
// await db.delete(topics);
// await db.insert(topics).values(
//   topicsData.map((t) => {
//     return {
//       name: t,
//     };
//   }),
// );
console.log('SEEDING END : DB CATEGORIES ======')

console.log('SEEDING START : DB CATEGORIES ======')
console.log('REMOVING : DB CATEGORIES ======')
// await db.delete(categories);

// for (const [key, value] of categoriesData) {
//   const getTopic = await db.query.topics.findFirst({
//     where: eq(topics.name, key),
//   });
//   await db.insert(categories).values(
//     value.map((v) => {
//       return {
//         name: v,
//         topicId: getTopic.id,
//       };
//     }),
//   );
// }

console.log('SEEDING END : DB CATEGORIES ======')

console.log('SEEDING START : DB PRODUCTS ======')

await db.delete(products)

const user = await db.select().from(users).where(eq(users.email, 'anhminhhoang13@gmail.com')).limit(1)
const categoryList = await db.select().from(categories).limit(999).orderBy(asc(categories.id))
const cIdMin = categoryList[0]?.id
const cIdMax = categoryList[categoryList.length - 1]?.id
const NUMBER_OF_PRODUCTS = 100
if (user[0]) {
	const id = user[0]?.id

	const insertProd = new Array(NUMBER_OF_PRODUCTS).fill(1).map((x) => {
		const name = faker.commerce.productName()
		const description = faker.commerce.productDescription()
		const sellerId = id
		const price = faker.number.float({ min: 0, max: 999999 })
		const quantity = faker.number.int({ max: 999 })
		const categoryId = '' + faker.number.int({ min: cIdMin, max: cIdMax })

		const isPublished = true

		return {
			sellerId,
			name,
			description,
			price,
			quantity,
			categoryId,
			isPublished,
		}
	})

	console.log(insertProd)
	const response = await db.insert(products).values(insertProd)
	console.log(response)
}

console.log('SEEDING END : DB PRODUCTS ======')
