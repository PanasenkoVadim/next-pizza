import { ClearButton, ErrorText, RequiredSymbol } from '..'
import { Input } from '../../ui'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string
	label?: string
	required?: boolean
	className?: string
}

export const FormInput: React.FC<Props> = ({
	className,
	name,
	label,
	required,
	...props
}) => {
	let errorText = 'Ошибка'
	return (
		<div className={className}>
			{label && (
				<p className='font-medium mb-2'>
					{label} {required && <RequiredSymbol />}
				</p>
			)}

			<div className='relative'>
				<Input className='h-12 text-md' {...props} />

				<ClearButton />
			</div>

			{errorText && <ErrorText text={errorText} className='mt-2' />}
		</div>
	)
}
