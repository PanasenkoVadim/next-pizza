import React from 'react'
import { FormInput, WhiteBlock } from '..'

type Props = {
	className?: string
}

export const CheckoutPersonalForm: React.FC<Props> = ({ className }) => {
	return (
		<WhiteBlock title='2. Персональные данные' className={className}>
			<div className='grid grid-cols-2 gap-5'>
				<FormInput className='text-base' name='firstname' placeholder='Имя' />
				<FormInput
					className='text-base'
					name='lastname'
					placeholder='Фамилия'
				/>
				<FormInput
					className='text-base'
					name='email'
					placeholder='E-Mail'
				/>
				<FormInput className='text-base' name='phone' placeholder='Телефон' />
			</div>
		</WhiteBlock>
	)
}
