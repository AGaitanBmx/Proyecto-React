import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
            if (existingItemIndex >= 0) {
                // Si el producto ya está en el carrito, actualiza la cantidad
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].cantidad += cantidad;
                return updatedCart;
            } else {
                // Si no está en el carrito, lo agrega con la cantidad inicial
                return [...prevCart, { ...item, cantidad }];
            }
        });
    };

    const removeItem = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    };

    return (
        <CartContext.Provider value={[cart, setCart, addItem, removeItem, getTotalPrice]}>
            {children}
        </CartContext.Provider>
    );
}