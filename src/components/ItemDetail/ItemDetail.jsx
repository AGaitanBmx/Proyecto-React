import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../Firebase/firebase';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cantidad, setCantidad] = useState(1);
    const [, , addItem] = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await getSingleProduct(id);
                setProduct(productData);
            } catch (error) {
                console.error("Error fetching product: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (cantidad > 0 && cantidad <= product.stock) {
            addItem({ ...product, cantidad });
        } else {
            alert('Cantidad no válida');
        }
    };

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (!product) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <div>
            <h1>Detalles del producto</h1>
            <h2>{product.nombre}</h2>
            <img src={product.img} alt={product.nombre} />
            <p>{product.descripcion}</p>
            <p>Talle/s: {product.talle}</p>
            <p>Precio: ${product.precio}</p>
            <p>Stock disponible: {product.stock}</p>
            
            <div>
                <input
                    type="number"
                    value={cantidad}
                    min="1"
                    max={product.stock}
                    onChange={(e) => setCantidad(Number(e.target.value))}
                />
                <button onClick={handleAddToCart}>Añadir al carrito</button>
            </div>
        </div>
    );
};

export default ItemDetail;