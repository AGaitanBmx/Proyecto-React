import {useContext, useState} from 'react'
import styles from './Item.module.css'
import {Link} from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'

const Item = ({ elemento }) => {
    const [cart, setCart, addItem] = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    const handleClick = () => {
        if (cantidad > 0 && cantidad <= elemento.stock) {
            addItem(elemento, cantidad);
        } else {
            alert('Cantidad no válida');
        }
    };

    return (
        <div className={styles.itemCard}>
            <h3>{elemento.nombre}</h3>
            <img className={styles.itemImg} src={elemento.img} alt="ropa" />
            <p>$ {elemento.precio}</p>
            <p>Stock disponible: {elemento.stock}</p>
            <input
                type="number"
                value={cantidad}
                min="1"
                max={elemento.stock}
                onChange={(e) => setCantidad(Number(e.target.value))}
            />
            <Link to={`/producto/${elemento.id}`}>
                <button className={styles.detailsButton}>Más detalles</button>
            </Link>
            <button onClick={handleClick}>Añadir al carro</button>
        </div>
    );
}

export default Item