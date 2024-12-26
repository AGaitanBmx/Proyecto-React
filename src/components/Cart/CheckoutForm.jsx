import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../Firebase/firebase';

const CheckoutForm = () => {
    const [cart, , , , getTotalPrice] = useContext(CartContext);

    const [formData, setFormData] = useState({
        nombre: '',
        celular: '',
        direccion: '',
        correo: ''
    });
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const order = {
            buyer: formData,
            items: cart.map((item) => ({
                id: item.id,
                nombre: item.nombre,
                cantidad: item.cantidad,
                precio: item.precio
            })),
            total: getTotalPrice(),
            date: new Date()
        };

        try {
            const docRef = await addDoc(collection(db, 'ordenes'), order);
            setOrderId(docRef.id);
        } catch (error) {
            console.error('Error al generar la orden:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Procesando tu orden...</p>;
    }

    if (orderId) {
        return (
            <div>
                <h2>¡Orden completada!</h2>
                <p>Gracias por tu compra. Tu número de orden es: <strong>{orderId}</strong></p>
            </div>
        );
    }

    return (
        <div>
            <h2>Finalizar Compra</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Celular:</label>
                    <input
                        type="tel"
                        name="celular"
                        value={formData.celular}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Dirección:</label>
                    <input
                        type="text"
                        name="direccion"
                        value={formData.direccion}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Correo Electrónico:</label>
                    <input
                        type="email"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Confirmar Compra</button>
            </form>
        </div>
    );
};

export default CheckoutForm;