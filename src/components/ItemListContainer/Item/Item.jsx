import { Link } from 'react-router-dom';
import styles from './Item.module.css';

const Item = ({ elemento }) => {
    return (
        <div className={styles.itemCard}>
            <h3>{elemento.nombre}</h3>
            <img className={styles.itemImg} src={elemento.img} alt="ropa" />
            <p>$ {elemento.precio}</p>
            <p>Stock disponible: {elemento.stock}</p>
            <Link to={`/producto/${elemento.id}`}>
                <button className={styles.detailsButton}>Más detalles</button>
            </Link>
        </div>
    );
}

export default Item;