import { createContext } from 'react';
import { CartContextType } from '@/types/cart';

export const CartContext = createContext<CartContextType>({
    status: false,
    items: [],
    addItem: ()=> {},
    removeItem: ()=> {},
    showCart: () => {}
});