import { Container, Header } from '@/shared/components'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'Next Pizza | Корзина',
	description: 'Next Pizza example description',
}

export default function CheckoutLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main className='min-h-screen bg-[#F4F1EE]'>
			<Suspense>
				<Header
					hasSearch={false}
					hasCart={false}
					className='border-b-gray-200'
				/>
			</Suspense>
			{children}
		</main>
	)
}
