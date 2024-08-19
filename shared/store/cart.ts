import { create } from 'zustand'
import { Api } from '../services/api-client'
import { getCartDetails } from '../lib'
import { CartStateItem } from '../lib/get-cart-details'

export interface CreateCartItemValues {
	productItemId: number
	ingredients?: number[]
}

export interface CartState {
	items: CartStateItem[]
	loading: boolean
	error: boolean
	totalAmount: number

	/* Получение товаров из корзины */
	fetchCartItems: () => Promise<void>

	/* Запрос на обновление количества товара */
	updateItemQuantity: (id: number, quantity: number) => Promise<void>

	/* Запрос на добавление товара в корзину */
	addCartItem: (values: CreateCartItemValues) => Promise<void>

	/* Запрос на удаление товара из корзины */
	removeCartItem: (id: number) => Promise<void>
}

export const useCartStore = create<CartState>((set, get) => ({
	items: [],
	loading: true,
	error: false,
	totalAmount: 0,
	fetchCartItems: async () => {
		try {
			set({ loading: true, error: false })
			const data = await Api.cart.getCart()
			set(getCartDetails(data))
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
	updateItemQuantity: async (id: number, quantity: number) => {
		try {
			set({ loading: true, error: false })
			const data = await Api.cart.updateItemQuantity(id, quantity)
			set(getCartDetails(data))
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
	addCartItem: async (value: CreateCartItemValues) => {},
	removeCartItem: async (id: number) => {
		try {
			set({ loading: true, error: false })
			const data = await Api.cart.removeCartItem(id)
			set(getCartDetails(data))
		} catch (error) {
			console.error(error)
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},
}))
