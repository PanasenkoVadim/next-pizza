import React from 'react'
import {
	AddressInput,
	ErrorText,
	FormInput,
	FormTextarea,
	WhiteBlock,
} from '..'
import { Controller, useFormContext } from 'react-hook-form'

type Props = {
	className?: string
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
	const { control } = useFormContext()
	return (
		<WhiteBlock title='3. Адрес доставки' className={className}>
			<div className='flex flex-col gap-5'>
				<Controller
					control={control}
					name='address'
					render={({ field, fieldState }) => (
						<div>
							<AddressInput onChange={field.onChange} />
							{fieldState.error?.message && (
								<ErrorText text={fieldState.error.message} className='mt-2' />
							)}
						</div>
					)}
				/>
				<FormTextarea
					className='text-base'
					name='comment'
					rows={5}
					placeholder='Комментарий к заказу'
				/>
			</div>
		</WhiteBlock>
	)
}
