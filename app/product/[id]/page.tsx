'use client'

import { Container } from '@/components/shared'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
	className?: string
	params: {
		id: number
	}
}

const ProductPage = (props: Props) => {
	const {
		params: { id },
		className,
	} = props
	return (
		<div className={cn(className, 'pt-10')}>
			<Container>ProductPage {id}</Container>
		</div>
	)
}

export default ProductPage
