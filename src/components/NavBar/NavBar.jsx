import React from 'react'
import CardWidget from '../CartWidget/CardWidget'

const NavBar = ({valor}) => {
    return (
        <div>
            <h1>Urban Mode</h1>
            <CardWidget valor={valor}/>
        </div>
    )
}

export default NavBar