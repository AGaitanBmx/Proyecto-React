import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../Firebase/firebase';
import { useNavigate } from "react-router-dom";

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
            const docRef = await addDoc(collection(db, "ordenes"), order);
            setOrderId(docRef.id);
            clearCart(); // Limpiar el carrito después de completar la compra
        } catch (error) {
            console.error("Error al crear la orden:", error);
        }
    };

    return (
        <div>
            {orderId ? (
                <div>
                    <h2>¡Compra finalizada!</h2>
                    <p>Tu ID de compra es: <strong>{orderId}</strong></p>
                    <button onClick={() => navigate("/")}>Volver al inicio</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h2>Completa tus datos</h2>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Teléfono:
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Dirección:
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Correo Electrónico:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Confirmar compra</button>
                </form>
            )}
        </div>
    );
};

export default CheckoutForm;