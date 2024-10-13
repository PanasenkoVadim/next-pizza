'use client'

import { cn } from '@/shared/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { CartButton, ProfileButton, SearchInput } from '.'
import { Container } from './container'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useSearchParams } from 'next/navigation'

type Props = {
	hasSearch?: boolean
	hasCart?: boolean
	className?: string
}

export const Header: React.FC<Props> = ({
	hasSearch = true,
	hasCart = true,
	className,
}) => {
	const searchParams = useSearchParams()

	useEffect(() => {
		let toastMessage = ''

		if (searchParams.has('paid')) {
			toastMessage = 'Заказ успешно оплачен! Информация отправлена на почту.'
		}

		// if (searchParams.has('verified')) {
		// 	toastMessage = 'Почта успешно подтверждена!'
		// }

		if (toastMessage) {
			setTimeout(() => {
				toast.success(toastMessage, {
					duration: 3000,
				})
			}, 1000)
		}
	}, [])
	return (
		<header className={cn('border-b', className)}>
			<Container className='flex items-center justify-between py-8'>
				<Link href='/'>
					<div className='flex items-center gap-4'>
						<Image src='/logo.png' alt='Logo' width={35} height={35} />
						<div>
							<h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
							<p className='text-sm text-gray-400 leading-3'>
								вкусней уже некуда
							</p>
						</div>
					</div>
				</Link>
				{hasSearch && (
					<div className='mx-10 flex-1'>
						<SearchInput />
					</div>
				)}

				<div className='flex items-center gap-3'>
					<ProfileButton />
					{hasCart && (
						<div>
							<CartButton />
						</div>
					)}
				</div>
			</Container>
		</header>
	)
}
