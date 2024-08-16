'use client'

import { cn } from '@/shared/lib/utils'
import { Dialog, DialogContent } from '@/shared/components/ui'
import { useRouter } from 'next/navigation'
import { ChoosePizzaForm, ChooseProductForm, Title } from '..'
import { ProductWithRelations } from '@/@types/prisma'

interface Props {
	className?: string
	product: ProductWithRelations
}

export const ChooseProductModal = ({ product, className }: Props) => {
	const router = useRouter()
	const isPizzaForm = Boolean(product.items[0].pizzaType)

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
					className
				)}
			>
				{isPizzaForm ? (
					<ChoosePizzaForm
						name={product.name}
						imageUrl={product.imageUrl}
						ingredients={product.ingredients}
					/>
				) : (
					<ChooseProductForm
						name={product.name}
						imageUrl={product.imageUrl}
					/>
				)}
			</DialogContent>
		</Dialog>
	)
}
