import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const [ cart ] = useContext(CartContext);

    useEffect(() => {
        console.log('Elementos en el carrito:', cart);
    }, [cart]);

    return (
        <div>
            <h1>Carrito de Compras</h1>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <h2>{item.nombre}</h2>
                            <img src={item.img} alt={item.nombre} />
                            <p>{item.descripcion}</p>
                            <p>Talle/s: {item.talle}</p>
                            <p>Precio: ${item.precio}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;