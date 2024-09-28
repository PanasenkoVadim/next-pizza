'use client'

import { Controller, useFormContext } from 'react-hook-form'
import { ClearButton, ErrorText, RequiredSymbol } from '..'
import { Input } from '../../ui'
import { IMaskInput } from 'react-imask'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string
	mask?: string
	label?: string
	placeholder?: string
	required?: boolean
	className?: string
}

export const FormInputMask: React.FC<Props> = ({
	className,
	mask,
	name,
	label,
	required,
	placeholder,
}) => {
	const {
		register,
		formState: { errors },
		watch,
		setValue,
		control,
	} = useFormContext()

	const value = watch(name)
	const errorText = errors[name]?.message as string

	const onClickClear = () => {
		setValue(name, '', { shouldValidate: true })
	}

	return (
		<div className={className}>
			{label && (
				<p className='font-medium mb-2'>
					{label} {required && <RequiredSymbol />}
				</p>
			)}

			<div className='relative'>
				<Controller
					name={name}
					render={({ field, fieldState }) => (
						<>
							<IMaskInput
								// autoComplete={'off'}
								mask={mask}
								className='h-12 text-md flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
								placeholder={placeholder}
								onChange={field.onChange}
							/>
							{field.value && <ClearButton onClick={onClickClear} />}
						</>
					)}
					control={control}
				/>

				
			</div>

			{errorText && <ErrorText text={errorText} className='mt-2' />}
		</div>
	)
}
