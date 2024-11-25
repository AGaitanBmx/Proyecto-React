import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import ItemList from './ItemList'
import { getProducts, getProductsByTalle } from '../../data/backend-falso'

const ItemListContainer = ({mensaje, fn}) => {
    const[products, setProducts]= useState([])
    const [talle, setTalle] = useState ("")
    const [cargando, setCargando] = useState (true)

    useEffect(() => {
    setCargando(true)
    if (talle){
        getProductsByTalle(talle)
        .then(resolve => setProducts(resolve))
        .catch(e => console.error(e))
        .finally(setCargando(false))
    }else{
        getProducts()
        .then(resolve => setProducts(resolve))
        .catch(e => console.error(e))
        .finally(setCargando(false))
    }
}, [talle] )

const changeTalle = (talle)=> {
    setTalle(talle)
}


    return (
        <>
        <div>
        <div>{mensaje}</div>
        <Button fn={fn} text="agregar al carrito" color="green"/>
        </div>
        <div>
            <div>
                <Button fn={()=> changeTalle("XXL")} text="XXL"/>
                <Button fn={()=> changeTalle("XL")} text="XL"/>
                <Button fn={()=> changeTalle("L")} text="L"/>
                <Button fn={()=> changeTalle("M")} text="M"/>
                <Button fn={()=> changeTalle("S")} text="S"/>
                <Button fn={()=> setCargando(true)} text="cargar"/>
            </div>
            {
                cargando
                ? 
                <h1>cargando...</h1>
                :
            <ItemList products={products}/>
            }
        </div>
        </>
    )
}

export default ItemListContainer