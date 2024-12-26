import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList/ItemList';
import { getProductsByCategory } from '../../Firebase/firebase';

const ItemListContainer = ({ mensaje }) => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                console.log(`Fetching products for category: ${category}`);
                const productsData = category ? await getProductsByCategory(category) : await getProductsByCategory(null);
                setProducts(productsData);
                console.log(`Products set for category ${category}:`, productsData);
            } catch (error) {
                console.error("Error fetching products: ", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>{mensaje}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;