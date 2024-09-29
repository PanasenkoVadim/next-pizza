'use client'

import { createOrder } from '@/app/actions'
import {
	CheckoutAddressForm,
	CheckoutCart,
	CheckoutPersonalForm,
	CheckoutSidebar,
	Container,
	Title,
} from '@/shared/components'
import { CheckoutFormValues, checkoutFormSchema } from '@/shared/constants'
import { useCart } from '@/shared/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function CheckoutPage() {
	const [submitting, setSubmitting] = React.useState(false)
	const { totalAmount, updateItemQuantity, items, removeCartItem, loading } =
		useCart()

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

	const onSubmit = async (data: CheckoutFormValues) => {
		try {
			setSubmitting(true)
			const url = await createOrder(data)

			toast.error('Заказ успешно оформлен! 📝 Переход на оплату... ', {
				icon: '✅',
			})

			if (url) {
				location.href = url
			}
		} catch (err) {
			console.log(err)
			setSubmitting(false)
			toast.error('Не удалось создать заказ', {
				icon: '❌',
			})
		}
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
								loading={loading}
								onClickCountButton={onClickCountButton}
								removeCartItem={removeCartItem}
							/>
							<CheckoutPersonalForm />
							<CheckoutAddressForm />
						</div>
						<div className='w-[450px]'>
							<CheckoutSidebar
								loading={loading || submitting}
								totalAmount={totalAmount}
							/>
						</div>
					</div>
				</form>
			</FormProvider>
		</Container>
	)
}
