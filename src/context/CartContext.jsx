import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export function CartProvider({children}){
    const [cart, setCart]=useState([]);

    const addItem = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    return(
        <CartContext.Provider value={[cart, setCart, addItem]}>
            {children}
        </CartContext.Provider>
    )
}
