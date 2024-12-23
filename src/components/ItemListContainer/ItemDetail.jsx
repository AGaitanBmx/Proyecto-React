import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ItemDetail.module.css';

export default function ItemDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProduct(id)
            .then((data) => setProduct(data))
            .catch((error) => console.error(error));
    }, [id]); 

    if (!product) {
        return <p>Cargando...</p>;
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