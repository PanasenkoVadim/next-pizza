'use client'

import {
	CheckoutCart,
	CheckoutSidebar,
	Container,
	FormInput,
	Title,
	WhiteBlock,
} from '@/shared/components/shared'
import { Input, Textarea } from '@/shared/components/ui'
import { useCart } from '@/shared/hooks'

export default function CheckoutPage() {
	const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart()

	// const form = useForm({
	// 	resolver: zodResolver(),
	// 	defaultValues: {
	// 		email: '',
	// 		firstname: '',
	// 		lastname: '',
	// 		phone: '',
	// 		address: '',
	// 		comment: '',
	// 	},
	// })
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
					<CheckoutCart
						items={items}
						totalAmount={totalAmount}
						onClickCountButton={onClickCountButton}
						removeCartItem={removeCartItem}
					/>
					<WhiteBlock title='2. Персональные данные'>
						<div className='grid grid-cols-2 gap-5'>
							<FormInput
								className='text-base'
								name='firstname'
								placeholder='Имя'
							/>
							<FormInput
								className='text-base'
								name='lastname'
								placeholder='Фамилия'
							/>
							<FormInput
								className='text-base'
								name='firstname'
								placeholder='E-Mail'
							/>
							<FormInput
								className='text-base'
								name='phone'
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
