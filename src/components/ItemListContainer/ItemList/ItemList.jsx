import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ products }) => {
    return (
    <>
        <div className={styles.itemList}>
            {products.map(product => (
                <Item key={product.id} elemento={product} />
            ))}
        </div>
    </>
    );
};

export default ItemList;
