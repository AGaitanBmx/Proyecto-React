import React, { createContext, useState } from 'react'

export const CartContext = createContext(false);

export function CartProvider({children}){
    const [cart, setCart]=useState([]);

    const addItem = (item) =>{
        setCart([...cart, item]);
    }

    return(
        <CartContext.Provider value={[cart, setCart, addItem]}>
            {children}
        </CartContext.Provider>
    )
}
