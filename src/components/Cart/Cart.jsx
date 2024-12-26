import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import CheckoutForm from './CheckoutForm';
import styles from './Cart.module.css';

const Cart = () => {
    const [cart, , , removeItem, getTotalPrice] = useContext(CartContext);
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    useEffect(() => {
        console.log("Elementos en el carrito:", cart);
    }, [cart]);

    if (isCheckingOut) {
        return <CheckoutForm />;
    }

    return (
        <div className={styles.cartContainer}>
            <h1>Carrito de Compras</h1>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <div className={styles.cartItems}>
                    {cart.map((item, index) => (
                        <div key={index} className={styles.cartItem}>
                            <h2 className={styles.cartItemText}>{item.nombre}</h2>
                            <img src={item.img} alt={item.nombre} className={styles.cartItemImg} />
                            <p className={styles.cartItemText}>{item.descripcion}</p>
                            <p className={styles.cartItemText}>Talle/s: {item.talle}</p>
                            <p className={styles.cartItemText}>Precio: ${item.precio}</p>
                            <p className={styles.cartItemText}>Cantidad: {item.cantidad}</p>
                            <p className={styles.cartItemText}>Total por este producto: ${item.precio * item.cantidad}</p>
                            <button onClick={() => removeItem(item.id)} className={styles.removeButton}>Eliminar</button>
                        </div>
                    ))}
                </div>
            )}
            {cart.length > 0 && (
                <div className={styles.totalContainer}>
                    <h2>Total: ${getTotalPrice()}</h2>
                    <button onClick={() => setIsCheckingOut(true)} className={styles.checkoutButton}>Proceder al pago</button>
                </div>
            )}
        </div>
    );
};

export default Cart;