import {
	Container,
	Title,
	TopBar,
	Filters,
	ProductsGroupList,
} from '@/components/shared'

export default function Home() {
	return (
		<>
			<Container>
				<Title text='Все пиццы' size='lg' className='font-extrabold mt-10' />
			</Container>
			<TopBar />
			<Container className='mt-10 pb-14'>
				<div className='flex gap-[80px]'>
					<div className='w-[250px]'>
						<Filters />
					</div>
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductsGroupList
								title='Пиццы'
								items={[
									{
										id: 1,
										name: 'Двойной цыпленок ',
										imageUrl:
											'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
										price: 550,
										items: [{ price: 550 }],
										ingredients: 'Моцарелла, томаты, цыпленок, чеснок, зелень',
									},
									{
										id: 2,
										name: 'Двойной цыпленок ',
										imageUrl:
											'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
										price: 550,
										items: [{ price: 550 }],
										ingredients: 'Моцарелла, томаты, цыпленок, чеснок, зелень',
									},
									{
										id: 3,
										name: 'Двойной цыпленок ',
										imageUrl:
											'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
										price: 550,
										items: [{ price: 550 }],
										ingredients: 'Моцарелла, томаты, цыпленок, чеснок, зелень',
									},
									{
										id: 4,
										name: 'Двойной цыпленок ',
										imageUrl:
											'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
										price: 550,
										items: [{ price: 550 }],
										ingredients: 'Моцарелла, томаты, цыпленок, чеснок, зелень',
									},
									{
										id: 5,
										name: 'Двойной цыпленок ',
										imageUrl:
											'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
										price: 550,
										items: [{ price: 550 }],
										ingredients: 'Моцарелла, томаты, цыпленок, чеснок, зелень',
									},
									{
										id: 6,
										name: 'Двойной цыпленок ',
										imageUrl:
											'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
										price: 550,
										items: [{ price: 550 }],
										ingredients: 'Моцарелла, томаты, цыпленок, чеснок, зелень',
									},
									{
										id: 7,
										name: 'Двойной цыпленок ',
										imageUrl:
											'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
										price: 550,
										items: [{ price: 550 }],
										ingredients: 'Моцарелла, томаты, цыпленок, чеснок, зелень',
									},
									{
										id: 8,
										name: 'Двойной цыпленок ',
										imageUrl:
											'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
										price: 550,
										items: [{ price: 550 }],
										ingredients: 'Моцарелла, томаты, цыпленок, чеснок, зелень',
									},
								]}
								categoryId={1}
							/>
							<ProductsGroupList
								title='Завтрак'
								items={[
									{
										id: 1,
										name: 'Омлет с беконом',
										imageUrl:
											'https://media.dodostatic.net/image/r:584x584/11EE7970326512C89366583FF997CA9E.avif',
										price: 550,
										items: [{ price: 550 }],
										ingredients: 'Классическое сочетание горячего омлета с поджаристой корочкой и бекона с добавлением моцареллы и томатов на завтрак',
									},
									{
										id: 2,
										name: 'Омлет с беконом',
										imageUrl:
											'https://media.dodostatic.net/image/r:584x584/11EE7970326512C89366583FF997CA9E.avif',
										price: 550,
										items: [{ price: 550 }],
										ingredients: 'Классическое сочетание горячего омлета с поджаристой корочкой и бекона с добавлением моцареллы и томатов на завтрак',
									},
									{
										id: 3,
										name: 'Омлет с беконом',
										imageUrl:
											'https://media.dodostatic.net/image/r:584x584/11EE7970326512C89366583FF997CA9E.avif',
										price: 550,
										items: [{ price: 550 }],
										ingredients: 'Классическое сочетание горячего омлета с поджаристой корочкой и бекона с добавлением моцареллы и томатов на завтрак',
									},
									{
										id: 4,
										name: 'Омлет с беконом',
										imageUrl:
											'https://media.dodostatic.net/image/r:584x584/11EE7970326512C89366583FF997CA9E.avif',
										price: 550,
										items: [{ price: 550 }],
										ingredients: 'Классическое сочетание горячего омлета с поджаристой корочкой и бекона с добавлением моцареллы и томатов на завтрак',
									},
									{
										id: 5,
										name: 'Омлет с беконом',
										imageUrl:
											'https://media.dodostatic.net/image/r:584x584/11EE7970326512C89366583FF997CA9E.avif',
										price: 550,
										items: [{ price: 550 }],
										ingredients: 'Классическое сочетание горячего омлета с поджаристой корочкой и бекона с добавлением моцареллы и томатов на завтрак',
									},
									{
										id: 6,
										name: 'Омлет с беконом',
										imageUrl:
											'https://media.dodostatic.net/image/r:584x584/11EE7970326512C89366583FF997CA9E.avif',
										price: 550,
										items: [{ price: 550 }],
										ingredients: 'Классическое сочетание горячего омлета с поджаристой корочкой и бекона с добавлением моцареллы и томатов на завтрак',
									}
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
