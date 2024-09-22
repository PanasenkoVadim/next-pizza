import React from 'react'
import { WhiteBlock } from '..'
import { Input, Textarea } from '../../ui'

type Props = {
	className?: string
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
	return (
		<WhiteBlock title='3. Адрес доставки' className={className}>
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
	)
}
