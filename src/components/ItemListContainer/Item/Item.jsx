import { useContext } from 'react';
import styles from './Item.module.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/cartContext';

const Item = ({ elemento }) => {
    const [cart, setCart, addItem] = useContext(CartContext);

    const handleClick = () => {
        addItem(elemento);
    };

    return (
        <div className={styles.itemCard}>
            <h3>{elemento.nombre}</h3>
            <img className={styles.itemImg} src={elemento.img} alt="ropa" />
            <p>$ {elemento.precio}</p>
            <Link to={`/product/${elemento.id}`}>
                <button className={styles.detailsButton}>Más detalles</button>
            </Link>
            <button onClick={handleClick}>Añadir al carro</button>
        </div>
    );
};

export default Item;