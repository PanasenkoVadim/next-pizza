'use client'

import React from 'react'
import { Ingredient, ProductItem } from '@prisma/client'
import { Title } from './title'
import { Button } from '../ui'
import { GroupVariants } from './group-variants'
import { cn } from '@/shared/lib/utils'

interface Props {
	imageUrl: string
	name: string
	onClickAdd?: VoidFunction
	className?: string
}

/**
 * Форма выбора ПИЦЦЫ
 */
export const ChooseProductForm: React.FC<Props> = ({
	name,
	imageUrl,
	onClickAdd,
	className,
}) => {
	const textDetaills = '30 см, традиционное тесто 30'
	const totalPrice = 350
	return (
		<div className={cn(className, 'flex flex-1')}>
			<div className='flex items-center justify-center flex-1 relative w-full'>
				<img
					src={imageUrl}
					alt={name}
					className='relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]'
				/>
			</div>

			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text={name} size='md' className='font-extrabold mb-1' />

				<p className='text-gray-400'>{textDetaills}</p>

				<Button className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
					Добавить в корзину за {totalPrice} ₽
				</Button>
			</div>
		</div>
	)
}
