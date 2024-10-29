import React from 'react'
import Button from '../Button/Button'

const ItemListContainer = ({mensaje, fn}) => {
    return (
        <>
        <div>{mensaje}</div>
        <Button fn={fn} text="agregar al carrito" color="green"/>
        </>
    )
}

export default ItemListContainer