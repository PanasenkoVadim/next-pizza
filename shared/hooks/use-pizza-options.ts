import React from 'react'
import { PizzaSize, PizzaType } from '../constants/pizza'
import { getAvailablePizzaSizes } from '../lib'
import { useSet } from 'react-use'
import { ProductItem } from '@prisma/client'
import { Variant } from '../components/shared/group-variants'

interface ReturnProps {
	size: PizzaSize
	type: PizzaType
	selectedIngredients: Set<number>
	availableSizes: Variant[]
	setType: (type: PizzaType) => void
	setSize: (size: PizzaSize) => void
	addIngredient: (id: number) => void
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
	const [size, setSize] = React.useState<PizzaSize>(20)
	const [type, setType] = React.useState<PizzaType>(1)
	const [selectedIngredients, { toggle: addIngredient }] = useSet(
		new Set<number>([])
	)
	const availableSizes = getAvailablePizzaSizes(type, items)

	React.useEffect(() => {
		const isCurrentSizeAvailable = availableSizes.find(
			item => Number(item.value) === size && !item.disabled
		)
		if (!isCurrentSizeAvailable) {
			const availableSize = availableSizes.find(item => !item.disabled)
			if (availableSize) {
				setSize(Number(availableSize.value) as PizzaSize)
			}
		}
	}, [type])

	return {
		size,
		type,
		selectedIngredients,
		availableSizes,
		setType,
		setSize,
		addIngredient,
	}
}
