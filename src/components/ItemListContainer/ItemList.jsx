import React, { useContext } from 'react'
import Item from './Item'
import { ProductsContext } from '../../context/ProductContext'

const ItemList = () => {
    const [products, setProducts, loading]=useContext(ProductsContext);

    return (
        <>
        {loading ? <p>Cargando...</p> :             <div>
                { products.map((prod) => {
                    return(
                    <Item key={prod.id} elemento={prod}/>
                    )
                })}
            </div>}
        </>
    )
}

export default ItemList