import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../Firebase/firebase';

const ItemDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

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
        </div>
    );
};

export default ItemDetail;
