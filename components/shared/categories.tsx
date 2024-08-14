'use client'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import React from 'react'

interface Props {
	className?: string
}
const items = [
	{ id: 1, name: 'Пиццы' },
	{ id: 2, name: 'Завтрак' },
	{ id: 3, name: 'Комбо' },
	{ id: 4, name: 'Закуски' },
	{ id: 5, name: 'Коктейли' },
	{ id: 6, name: 'Кофе' },
	{ id: 7, name: 'Напитки' },
	{ id: 8, name: 'Десерты' },
]

export const Categories: React.FC<Props> = ({ className }) => {
	const categoryActiveId = useCategoryStore(state => state.activeId)
	const setActiveCategoryId = useCategoryStore(state => state.setActiveId)

	return (
		<div
			className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
		>
			{items.map(({name, id}) => (
				<a
					className={cn(
						'flex items-center font-bold h-11 rounded-2xl px-5',
						categoryActiveId === id &&
							'bg-white shadow-md shadow-gray-200 text-primary'
					)}
					href={`/#${name}`}
					key={id}
				>
					<button onClick={() => setActiveCategoryId(id)}>{name}</button>
				</a>
			))}
		</div>
	)
}
