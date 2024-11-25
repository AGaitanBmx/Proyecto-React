import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {

    return (
        <div>
            { products.map((elemento) => {
                return(
                <Item key={elemento.nombre} elemento={elemento}/>
                )
            })}
        </div>
    )
}

export default ItemList