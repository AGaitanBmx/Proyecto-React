import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import CheckoutForm from './CheckoutForm'; // Asegúrate de que este sea el path correcto

const Cart = () => {
    const [cart, , , removeItem, getTotalPrice] = useContext(CartContext);
    const [showCheckout, setShowCheckout] = useState(false);

    useEffect(() => {
        console.log('Elementos en el carrito:', cart);
    }, [cart]);

    const handleCheckout = () => {
        setShowCheckout(true);
    };

    return (
        <div>
            <h1>Carrito de Compras</h1>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                <h2>{item.nombre}</h2>
                                <img src={item.img} alt={item.nombre} />
                                <p>{item.descripcion}</p>
                                <p>Talle/s: {item.talle}</p>
                                <p>Precio: ${item.precio}</p>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>Total por este producto: ${item.precio * item.cantidad}</p>
                                <button onClick={() => removeItem(item.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <h2>Total a pagar: ${getTotalPrice()}</h2>
                    {!showCheckout && (
                        <button onClick={handleCheckout}>Confirmar compra</button>
                    )}
                </>
            )}
            {showCheckout && (
                <CheckoutForm 
                    cart={cart} 
                    total={getTotalPrice()} 
                    onSuccess={() => {
                        setShowCheckout(false);
                    }}
                />
            )}
        </div>
    );
};

export default Cart;