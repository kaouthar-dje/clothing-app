import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      return exists
        ? prev.map(p => (p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p))
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const increaseQty = id => {
    setCart(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const decreaseQty = id => {
    setCart(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
