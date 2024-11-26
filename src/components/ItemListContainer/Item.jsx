import React from 'react'
import styles from './Item.module.css'

const Item = ({elemento}) => {
    return (
        <div className={styles.itemCard}>
            <h3>
                {elemento.nombre}
            </h3>
            <img src={elemento.img} alt="ropa" width={300} height={300} />
            <p>{elemento.talle}</p>
            <p>$ {elemento.precio}</p>
            <button>
                Más detalles
            </button>
        </div>
    )
}

export default Item