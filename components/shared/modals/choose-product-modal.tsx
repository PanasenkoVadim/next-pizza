'use client'

import { cn } from '@/lib/utils'
import { Product } from '@prisma/client'
import { Dialog, DialogContent } from '@/components/ui'
import { useRouter } from 'next/navigation'
import { Title } from '..'

interface Props {
	className?: string
	product: Product
}

export const ChooseProductModal = ({ product, className }: Props) => {
	const router = useRouter()

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					'p-4 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden'
				)}
			>
				<Title text={product.name} size='lg' className='font-extrabold' />
			</DialogContent>
		</Dialog>
	)
}
