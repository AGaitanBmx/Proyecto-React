import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex((prod) => prod.id === item.id);
            if (existingItemIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].cantidad += item.cantidad;
                return updatedCart;
            }
            return [...prevCart, item];
        });
    };

    const removeItem = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.precio * item.cantidad, 0);
    };

    return (
        <CartContext.Provider value={[cart, setCart, addItem, removeItem, getTotalPrice, clearCart]}>
            {children}
        </CartContext.Provider>
    );
}