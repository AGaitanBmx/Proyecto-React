import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../data/backend-falso';
import styles from './ItemDetail.module.css';

export default function ItemDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);  // Inicializa como null para manejar la carga

    useEffect(() => {
        getProduct(id)
            .then((data) => setProduct(data))
            .catch((error) => console.error(error));
    }, [id]);  // Agrega 'id' a las dependencias

    if (!product) {
        return <p>Cargando...</p>;  // Muestra un mensaje mientras se carga el producto
    }

    return (
        <>
            <h1>Detalles del Producto</h1>
            <p>ID: {product.id}</p>
            <h3>Nombre: {product.nombre}</h3>
            <img className={styles.imgDetails} src={product.img} alt={product.nombre} />
            <p>Descripción: {product.descripcion}</p>
            <p>Talle: {product.talle}</p>
            <p>Precio: ${product.precio}</p>
        </>
    );
}