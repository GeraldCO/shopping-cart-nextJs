import { useState, ReactNode } from "react";
import { CartContext } from "./CartContext";
import { Item } from "@/types/items";
import React from 'react';

interface CartProviderInterface {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderInterface) => {
  const [status, setStatus] = useState(false);

  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    console.log(item);
    setItems([...items, item]);
  };

  const removeItem = (itemId: string) => {    
    setItems(items.filter((item) => item.id !== itemId));
  };

  const showCart = (cartStatus: boolean) => {    
    setStatus(cartStatus)
  }

  return (
    <CartContext.Provider value={{ status, items, addItem, removeItem, showCart }}>
      {children}
    </CartContext.Provider>
  );
};