import React, { useContext } from 'react'
import Item from './Item'
import { ProductsContext } from '../../context/ProductContext'

const ItemList = () => {
    const [products, setProducts]=useContext(ProductsContext);

    return (
        <div>
            { products.map((prod) => {
                return(
                <Item key={prod.id} elemento={prod}/>
                )
            })}
        </div>
    )
}

export default ItemList