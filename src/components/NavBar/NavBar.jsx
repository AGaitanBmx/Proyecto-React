import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = ({valor}) => {
    return (
        <>
            <h1>Urban mode</h1>
            <nav className={styles.navBar}>
                <Link to='/'><img className={styles.logoHome} src='../../public/casa.png'/></Link>
                <Link to='/products'><button className={styles.navButton}>productos</button></Link>
                <Link to='/contact'><button className={styles.navButton}>contacto</button></Link>
                <div className={styles.cartContainer}>
                    <CartWidget valor={valor}/>
                </div>
            </nav>
        </>
    )
}

export default NavBar