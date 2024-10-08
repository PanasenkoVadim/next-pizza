import React from 'react'
import { CheckoutItem, CheckoutItemSkeleton, WhiteBlock } from '..'
import { Trash2Icon } from 'lucide-react'
import { CartStateItem } from '@/shared/lib/get-cart-details'
import { PizzaSize, PizzaType } from '@/shared/constants/pizza'
import { getCartItemDetails } from '@/shared/lib'

type Props = {
	items: CartStateItem[]
	totalAmount: number
	className?: string
	loading?: boolean
	onClickCountButton: (
		id: number,
		quantity: number,
		type: 'plus' | 'minus'
	) => void
	removeCartItem: (id: number) => Promise<void>
}

export const CheckoutCart: React.FC<Props> = ({
	className,
	totalAmount,
	loading,
	onClickCountButton,
	removeCartItem,
	items,
}) => {
	return (
		<WhiteBlock
			title='1. Корзина'
			className={className}
			endAdornment={
				totalAmount > 0 && (
					<button>
						<div className='flex items-center gap-1 text-[#9ca3af]'>
							<Trash2Icon
								// onClick={() => {}}
								className='text-gray-400 cursor-pointer hover:text-gray-600'
								size={16}
							/>
							Очистить корзину
						</div>
					</button>
				)
			}
		>
			<div className='flex flex-col gap-4'>
				{loading
					? [...Array(3)].map((_, key) => (
							<CheckoutItemSkeleton key={key} />
					  ))
					: items.map(item => (
							<CheckoutItem
								key={item.id}
								id={item.id}
								imageUrl={item.imageUrl}
								name={item.name}
								disabled={item.disabled}
								details={getCartItemDetails(
									item.ingredients,
									item.pizzaSize as PizzaSize,
									item.pizzaType as PizzaType
								)}
								price={item.price}
								quantity={item.quantity}
								onClickCountButton={type =>
									onClickCountButton(item.id, item.quantity, type)
								}
								onClickRemove={() => removeCartItem(item.id)}
							/>
					  ))}
			</div>
		</WhiteBlock>
	)
}
