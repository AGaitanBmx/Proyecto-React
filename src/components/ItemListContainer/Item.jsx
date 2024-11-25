import React from 'react'

const Item = ({elemento}) => {
    return (
        <div>
            <h3>
                {elemento.nombre}
            </h3>
            <img src={elemento.img} alt="ropa" width={300} height={300} />
            <p>{elemento.talle}</p>
            <p>$ {elemento.precio}</p>
        </div>
    )
}

export default Item