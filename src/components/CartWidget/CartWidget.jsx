import React from 'react'
import { useContext } from 'react';
import { BsCart4 } from "react-icons/bs";
import { CartContext } from '../../context/CartContext';
const CartWidget = () => {
    const [cart] = useContext(CartContext);

    return (
        <>
            <div>
                <button>
                    <BsCart4 />
                    <span>{cart.length}</span>
                </button>
            </div>
        </>
    )
}

export default CartWidget