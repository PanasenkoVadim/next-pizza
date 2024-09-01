'use client'
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/shared/components/ui/sheet'
import { useCart } from '@/shared/hooks'
import { getCartItemDetails, plural } from '@/shared/lib'
import { cn } from '@/shared/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { CartDrawerItem } from '.'
import { Button } from '../ui'
import { PizzaSize, PizzaType } from '@/shared/constants/pizza'

interface Props {
	className?: string
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
	children,
	className,
}) => {
	const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart()

	const onClickCountButton = (
		id: number,
		quantity: number,
		type: 'plus' | 'minus'
	) => {
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
		updateItemQuantity(id, newQuantity)
	}

	return (
		<div className={cn('', className)}>
			<Sheet>
				<SheetTrigger asChild>{children}</SheetTrigger>
				<SheetContent className='flex flex-col justify-between pb-0 bg-[#F4F1EE]'>
					<SheetHeader>
						<SheetTitle>
							В корзине{' '}
							<span className='font-bold'>
								{items.length}{' '}
								{plural(['товар', 'товара', 'товаров'], items.length)}
							</span>
						</SheetTitle>
					</SheetHeader>

					<div className='-mx-6 mt-5 overflow-auto flex-1'>
						{items.map(item => (
							<CartDrawerItem
								key={item.id}
								id={item.id}
								imageUrl={item.imageUrl}
								details={getCartItemDetails(
									item.ingredients,
									item.pizzaSize as PizzaSize,
									item.pizzaType as PizzaType
								)}
								name={item.name}
								price={item.price}
								quantity={item.quantity}
								className='mb-2'
								onClickCountButton={type =>
									onClickCountButton(item.id, item.quantity, type)
								}
								onClickRemove={() => removeCartItem(item.id)}
							/>
						))}
					</div>

					<SheetFooter className='-mx-6 bg-white p-8'>
						<div className='w-full'>
							<div className='flex mb-4'>
								<span className='flex flex-1 text-lg text-neutral-500'>
									Итого
									<div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
								</span>

								<span className='font-bold text-lg'>{totalAmount} ₽</span>
							</div>

							<Link href='/checkout'>
								<Button type='submit' className='w-full h-12 text-base'>
									Оформить заказ
									<ArrowRight className='w-5 ml-2' />
								</Button>
							</Link>
						</div>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</div>
	)
}
