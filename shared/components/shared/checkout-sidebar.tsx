'use client'

import { cn } from '@/shared/lib/utils'
import { ArrowRight, Package, Percent, Truck } from 'lucide-react'
import React from 'react'
import { CheckoutItemDetails, WhiteBlock } from '.'
import { Button, Skeleton } from '../ui'

const VAT = 7
const DELIVERY_PRICE = 150

interface Props {
	totalAmount: number
	loading?: boolean
	className?: string
}

export const CheckoutSidebar: React.FC<Props> = ({
	totalAmount,
	loading,
	className,
}) => {
	const vatPrice = (totalAmount * VAT) / 100
	const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice
	return (
		<WhiteBlock className={cn('p-6 sticky top-4', className)}>
			<div className='flex flex-col gap-1'>
				<span className='text-xl'>Итого:</span>
				{loading ? (
					<Skeleton className='w-30 h-11' />
				) : (
					<span className='h-11 text-[34px] font-extrabold'>
						{totalPrice} ₽
					</span>
				)}
			</div>
			<CheckoutItemDetails
				title={
					<div className='flex items-center'>
						<Package className='mr-2 text-gray-300' size={18} />
						Стоимость корзины
					</div>
				}
				value={`${totalAmount} ₽`}
			/>
			<CheckoutItemDetails
				title={
					<div className='flex items-center'>
						<Percent className='mr-2 text-gray-300' size={18} />
						НДС:
					</div>
				}
				value={`${vatPrice} ₽`}
			/>
			<CheckoutItemDetails
				title={
					<div className='flex items-center'>
						<Truck className='mr-2 text-gray-300' size={18} />
						Доставка:
					</div>
				}
				value={`${DELIVERY_PRICE} ₽`}
			/>
			<Button
				loading={false}
				type='submit'
				className='w-full h-14 rounded-2xl mt-6 text-base font-bold'
			>
				Перейти к оплате
				<ArrowRight className='w-5 ml-2' />
			</Button>
		</WhiteBlock>
	)
}
