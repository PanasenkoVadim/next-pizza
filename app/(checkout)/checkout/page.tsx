'use client'

import {
	CheckoutAddressForm,
	CheckoutCart,
	CheckoutPersonalForm,
	CheckoutSidebar,
	Container,
	Title,
} from '@/shared/components/shared'
import {
	CheckoutFormValues,
	checkoutFormSchema,
} from '@/shared/components/shared/checkout/schemas/checkout-form-schema'
import { useCart } from '@/shared/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

export default function CheckoutPage() {
	const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart()

	const form = useForm<CheckoutFormValues>({
		resolver: zodResolver(checkoutFormSchema),
		defaultValues: {
			email: '',
			firstname: '',
			lastname: '',
			phone: '',
			address: '',
			comment: '',
		},
	})

	const onSubmit = (data: CheckoutFormValues) => {
		console.log(data)
	}
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
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className='flex gap-10 mb-20'>
						<div className='flex flex-1 flex-col gap-10'>
							<CheckoutCart
								items={items}
								totalAmount={totalAmount}
								onClickCountButton={onClickCountButton}
								removeCartItem={removeCartItem}
							/>
							<CheckoutPersonalForm />
							<CheckoutAddressForm />
						</div>
						<div className='w-[450px]'>
							<CheckoutSidebar totalAmount={totalAmount} />
						</div>
					</div>
				</form>
			</FormProvider>
		</Container>
	)
}
