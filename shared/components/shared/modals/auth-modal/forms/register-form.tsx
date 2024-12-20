'use client'

import { useForm } from 'react-hook-form'

type Props = {
	onClose: VoidFunction
}

export const RegisterForm = ({ onClose }: Props) => {
	const form = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const handleClose = () => {
		onClose()
	}
	return <div></div>
}
