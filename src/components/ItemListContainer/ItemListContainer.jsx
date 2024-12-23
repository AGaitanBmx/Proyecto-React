import React, { useContext } from 'react';
import ItemList from './ItemList';
import { ProductsContext } from '../../context/ProductContext';

const ItemListContainer = ({ mensaje }) => {
    const [products, , loading] = useContext(ProductsContext);

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
            <h1>{mensaje}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;