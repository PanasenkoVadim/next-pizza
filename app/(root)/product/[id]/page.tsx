import {
	Container,
	GroupVariants,
	PizzaImage,
	Title,
} from '@/shared/components/shared'
import { prisma } from '@/prisma/prisma-client'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

export const metadata: Metadata = {
	title: 'Next Pizza | Детальная',
}

type Props = {
	params: {
		id: string
	}
}
export default async function ProductPage(props: Props) {
	const {
		params: { id },
	} = props
	const product = await prisma.product.findFirst({ where: { id: Number(id) } })

	if (!product) {
		return notFound()
	}

	return (
		<Container className='flex flex-col my-10'>
			<div className='flex flex-1'>
				<PizzaImage
					size={40}
					imageUrl={product.imageUrl}
					alt={product.name}
				/>
				<div className='w-[490px] bg-[#f7f6f5] p-7'>
					<Title
						text={product.name}
						size='md'
						className='font-extrabold mb-1'
					/>
					<p className='text-gray-400'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
						deleniti quisquam provident sunt reiciendis quo magnam rem
						necessitatibus, unde nam, nulla itaque eius. Reiciendis nesciunt
						sequi quas repudiandae aspernatur beatae?
					</p>
					<GroupVariants
						items={[
							{
								name: 'Маленькая',
								value: '1',
							},
							{
								name: 'Средняя',
								value: '2',
							},
							{
								name: 'Большая',
								value: '3',
								disabled: true,
							},
						]}
						value='1'
					/>
				</div>
			</div>
		</Container>
	)
}
