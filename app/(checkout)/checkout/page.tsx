'use client'

import {
	CheckoutItem,
	CheckoutSidebar,
	Container,
	Title,
	WhiteBlock,
} from '@/shared/components/shared'
import { Input, Textarea } from '@/shared/components/ui'
import { PizzaSize, PizzaType } from '@/shared/constants/pizza'
import { useCart } from '@/shared/hooks'
import { getCartItemDetails } from '@/shared/lib'
import { Trash2Icon } from 'lucide-react'

export default function page() {
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
		<Container className='mt-10 flex flex-col'>
			<Title
				text='Оформление заказа'
				className='font-extrabold mb-8 text-[36px]'
			/>
			<div className='flex gap-10 mb-20'>
				<div className='flex flex-1 flex-col gap-10'>
					<WhiteBlock
						title='1. Корзина'
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
						<div className=''>
							{items.length > 0 &&
								items.map(item => (
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
										className='mb-4'
										onClickCountButton={type =>
											onClickCountButton(item.id, item.quantity, type)
										}
										onClickRemove={() => removeCartItem(item.id)}
									/>
								))}
						</div>
					</WhiteBlock>
					<WhiteBlock title='2. Персональные данные'>
						<div className='grid grid-cols-2 gap-5'>
							<Input className='text-base' name='firstname' placeholder='Имя' />
							<Input
								className='text-base'
								name='lastname'
								placeholder='Фамилия'
							/>
							<Input
								className='text-base'
								name='firstname'
								placeholder='E-Mail'
							/>
							<Input
								className='text-base'
								name='firstname'
								placeholder='Телефон'
							/>
						</div>
					</WhiteBlock>
					<WhiteBlock title='3. Адрес доставки'>
						<div className='flex flex-col gap-5'>
							<Input
								className='text-base'
								name='address'
								placeholder='Введите адрес доставки'
							/>
							<Textarea
								className='text-base'
								rows={5}
								placeholder='Комментарий к заказу'
							/>
						</div>
					</WhiteBlock>
				</div>
				<div className='w-[450px]'>
					<CheckoutSidebar totalAmount={totalAmount} />
				</div>
			</div>
		</Container>
	)
}
