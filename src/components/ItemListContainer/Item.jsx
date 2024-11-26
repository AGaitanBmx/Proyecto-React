import React from 'react'
import styles from './Item.module.css'
import {Link} from 'react-router-dom'

const Item = ({elemento}) => {
    return (
        <div className={styles.itemCard}>
            <h3>
                {elemento.nombre}
            </h3>
            <img src={elemento.img} alt="ropa" width={300} height={300} />
            <p>$ {elemento.precio}</p>
            <Link to={`/product/${elemento.id}`}><button className={styles.detailsButton}>
                Más detalles
            </button></Link>
        </div>
    )
}

export default Item