import { prisma } from '@/prisma/prisma-client'
import {
	ChoosePizzaForm,
	ChooseProductForm,
	Container,
	ProductForm,
} from '@/shared/components/shared'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

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
	const product = await prisma.product.findFirst({
		where: {
			id: Number(id),
		},
		include: {
			ingredients: true,
			items: true,
			category: {
				include: {
					products: {
						include: {
							items: true,
						},
					},
				},
			},
		},
	})

	if (!product) {
		return notFound()
	}

	return (
		<Container className='flex flex-col my-10'>
			<ProductForm product={product} />
		</Container>
	)
}
