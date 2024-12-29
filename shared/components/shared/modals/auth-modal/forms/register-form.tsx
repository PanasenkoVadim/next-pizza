'use client'

import { FormProvider, useForm } from 'react-hook-form'
import { TFormRegisterValues, formRegisterSchema } from './schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'
import { FormInput, Title } from '../../..'
import { Button } from '@/shared/components'
import { registerUser } from '@/app/actions'

type Props = {
	onClose: VoidFunction
}

export const RegisterForm = ({ onClose }: Props) => {
	const form = useForm<TFormRegisterValues>({
		resolver: zodResolver(formRegisterSchema),
		defaultValues: {
			email: '',
			fullName: '',
			password: '',
			confirmPassword: '',
		},
	})

	const onSubmit = async (data: TFormRegisterValues) => {
		try {
			await registerUser({
				email: data.email,
				fullName: data.fullName,
				password: data.password,
			})

			toast.error('Регистрация успешна 📝. Подтвердите свою почту', {
				icon: '✅',
			})

			onClose?.()
		} catch (error) {
			console.error('Error [REGISTRATION]', error)
			return toast.error('Неверный E-Mail или пароль', {
				icon: '❌',
			})
		}
	}

	return (
		<FormProvider {...form}>
			<form
				className='flex flex-col gap-5'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<div className='flex justify-between items-center'>
					<div className='mr-2'>
						<Title text='Регистрация' size='md' className='font-bold' />
						<p className='text-gray-400 text-sm'>
							Заполните свои данные для регистрации
						</p>
					</div>
					<img
						src='/assets/images/phone-icon.png'
						alt='phone-icon'
						width={60}
						height={60}
					/>
				</div>

				<FormInput name='fullName' label='Имя' required />
				<FormInput name='email' label='E-Mail' required />
				<FormInput name='password' label='Пароль' type='password' required />
				<FormInput name='confirmPassword' label='Пароль' type='password' required />

				<Button
					loading={form.formState.isSubmitting}
					className='h-12 text-base'
					type='submit'
				>
					Зарегистрироваться
				</Button>
			</form>
		</FormProvider>
	)
}
