import { CartItemDTO } from '../services/dto/cart.dto'

export const calcCartItemTotalPrice = (item: CartItemDTO): number => {
	const ingredientsPrice = item.ingredients.reduce(
		(acc, item) => acc + item.price,
		0
	)
	return item.quantity * (item.productItem.price + ingredientsPrice)
}
