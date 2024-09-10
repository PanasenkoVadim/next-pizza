import React from 'react'
import { CartState, useCartStore } from '../store'


export const useCart = (): CartState => {
  const cartState = useCartStore((state) => state);

  React.useEffect(() => {
    cartState.fetchCartItems();
  }, []);

  return cartState;
};
