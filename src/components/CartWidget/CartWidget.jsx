import React from 'react'
import { useContext } from 'react';
import { BsCart4 } from "react-icons/bs";
import { CartContext } from '../../context/cartContext';
const CartWidget = () => {
    const [cart] = useContext(CartContext);

    return (
        <>
        {cart.length > 0 ? <div>
                <button>
                    <BsCart4 />
                    <span>{cart.length}</span>
                </button>
            </div> : <div>
                <button>
                    <span>carrito vacio</span>
                    <BsCart4 />
                </button>
            </div> }

        </>
    )
}

export default CartWidget