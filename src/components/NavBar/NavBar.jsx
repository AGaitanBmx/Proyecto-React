import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = ({ valor }) => {
    return (
        <>
            <nav className={styles.navBar}>
                <Link to='/'><img className={styles.logoHome} src='../../public/casa.png' alt="Home" /></Link>
                <Link to='/categoria/hombre'><button className={styles.navButton}>Hombres</button></Link>
                <Link to='/categoria/mujer'><button className={styles.navButton}>Mujeres</button></Link>
                <Link to='/categoria/niño'><button className={styles.navButton}>Niños</button></Link>
                <div className={styles.cartContainer}>
                    <CartWidget valor={valor} />
                </div>
            </nav>
        </>
    );
};

export default NavBar;