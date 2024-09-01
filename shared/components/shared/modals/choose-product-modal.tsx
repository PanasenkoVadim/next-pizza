'use client'

import { cn } from '@/shared/lib/utils'
import { Dialog, DialogContent } from '@/shared/components/ui'
import { useRouter } from 'next/navigation'
import { ChoosePizzaForm, ChooseProductForm, Title } from '..'
import { ProductWithRelations } from '@/@types/prisma'
import { addCartItem } from '@/shared/services/cart'
import { useCartStore } from '@/shared/store'
import toast from 'react-hot-toast'

interface Props {
	className?: string
	product: ProductWithRelations
}

export const ChooseProductModal = ({ product, className }: Props) => {
	const router = useRouter()
	const firstItem = product.items[0]
	const isPizzaForm = Boolean(firstItem.pizzaType)
	const [addCartItem, loading] = useCartStore(state => [
		state.addCartItem,
		state.loading,
	])

	const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
		try {
			const itemId = productItemId ?? firstItem.id
			await addCartItem({
				productItemId: itemId,
				ingredients,
			})

			toast.success(`${product.name} в корзине`)

			router.back()
		} catch (error) {
			toast.error('Не удалось добавить продукт в корзину');
      console.error(error);
		}
	}
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
						items={product.items}
						onSubmit={onSubmit}
						loading={loading}
					/>
				) : (
					<ChooseProductForm
						name={product.name}
						price={firstItem.price}
						imageUrl={product.imageUrl}
						onSubmit={onSubmit}
						loading={loading}
					/>
				)}
			</DialogContent>
		</Dialog>
	)
}
