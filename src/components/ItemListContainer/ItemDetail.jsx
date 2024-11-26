import {useState, useEffect} from 'react'

export default function ItemDetail(){
    const[product, setProduct] = useState({});

    useEffect(()=>{}, []);

    return (
        <>
            <h1>Detalles del Producto</h1>
            <p>ID: {product.id}</p>
            <h3>Nombre: {product.title}</h3>
            <img src={product.image} alt="" />
            <p>Descripcion: {product.descripcion}</p>
            <p>Talle: {product.talle}</p>
            <p>precio ${product.precio}</p>
        </>
    );
}
