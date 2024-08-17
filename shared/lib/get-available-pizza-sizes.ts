import { ProductItem } from '@prisma/client'
import { PizzaType, pizzaSizes } from '../constants/pizza'

export const getAvailablePizzaSizes = (
	type: PizzaType,
	items: ProductItem[]
) => {
	const filteredPizzasByType = items.filter(item => item.pizzaType === type)

	const availablePizzaSizes = pizzaSizes.map(item => ({
		...item,
		disabled: !filteredPizzasByType.some(
			pizza => pizza.size === Number(item.value)
		),
	}))

	return availablePizzaSizes
}
