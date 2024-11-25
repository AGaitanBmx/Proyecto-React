import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = ({valor}) => {
    return (
        <div>
            <h1>Urban Mode</h1>
            <CartWidget valor={valor}/>
        </div>
    )
}

export default NavBar