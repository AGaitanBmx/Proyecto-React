import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../Firebase/firebase';
import { useNavigate } from "react-router-dom";
import styles from './CheckoutForm.module.css';

const CheckoutForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState(null);
    const [cart, , , , getTotalPrice, clearCart] = useContext(CartContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const total = getTotalPrice();

        const order = {
            buyer: {
                name,
                phone,
                address,
                email,
            },
            items: cart,
            total,
            date: new Date().toISOString(),
        };

        try {
            const docRef = await addDoc(collection(db, "orders"), order);
            setOrderId(docRef.id);
            clearCart();
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className={styles.checkoutFormContainer}>
            <h2>Formulario de Pago</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone">Teléfono</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="address">Dirección</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Enviar Pedido</button>
            </form>
            {orderId && (
                <div className={styles.orderConfirmation}>
                    <p>Gracias por tu compra. Tu número de orden es: {orderId}</p>
                    <button onClick={handleGoHome} className={styles.homeButton}>Ir a la página de inicio</button>
                </div>
            )}
        </div>
    );
};

export default CheckoutForm;