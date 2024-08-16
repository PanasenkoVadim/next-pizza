'use client'

import React from 'react'
import { Ingredient, ProductItem } from '@prisma/client'
import { Title } from './title'
import { Button } from '../ui'
import { GroupVariants } from './group-variants'
import { cn } from '@/shared/lib/utils'
import { PizzaImage } from '.'
import {
	PizzaSize,
	PizzaType,
	pizzaSizes,
	pizzaTypes,
} from '@/shared/constants/pizza'

interface Props {
	imageUrl: string
	name: string
	ingredients?: Ingredient[]
	items?: ProductItem[]
	onClickAdd?: VoidFunction
	className?: string
}

/**
 * Форма выбора ПИЦЦЫ
 */
export const ChoosePizzaForm: React.FC<Props> = ({
	name,
	items,
	imageUrl,
	ingredients,
	onClickAdd,
	className,
}) => {
	const [size, setSize] = React.useState<PizzaSize>(30)
	const [type, setType] = React.useState<PizzaType>(1)

	const textDetails = '30 см, традиционное тесто 30'
	const totalPrice = 350
	// const size = 30

	return (
		<div className={cn(className, 'flex flex-1')}>
			<PizzaImage imageUrl={imageUrl} size={size} />

			<div className='w-[490px] bg-[#f7f6f5] p-7'>
				<Title text={name} size='md' className='font-extrabold mb-1' />

				<p className='text-gray-400'>{textDetails}</p>

				<div className='flex flex-col gap-4 my-5'>
					<GroupVariants
						items={pizzaSizes}
						value={String(size)}
						onClick={value => setSize(Number(value) as PizzaSize)}
					/>
					<GroupVariants
						items={pizzaTypes}
						value={String(type)}
						onClick={value => setType(Number(value) as PizzaType)}
					/>
				</div>
				<p className='text-sm text-gray-400'>
					{ingredients?.map(ingredient => ingredient.name).join(', ')}
				</p>

				<Button className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
					Добавить в корзину за {totalPrice} ₽
				</Button>
			</div>
		</div>
	)
}
