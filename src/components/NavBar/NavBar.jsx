import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = ({ valor }) => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.leftContainer}>
                <Link to='/'><img className={styles.logoHome} src='../../public/casa.png' alt="Home" /></Link>
                <Link to='/categoria/hombre'><button className={styles.navButton}>Hombres</button></Link>
                <Link to='/categoria/mujer'><button className={styles.navButton}>Mujeres</button></Link>
                <Link to='/categoria/niño'><button className={styles.navButton}>Niños</button></Link>
                <Link to='/cart'><div className={styles.cartContainer}>
                    <CartWidget valor={valor} />
                </div></Link>
            </div>
            <div className={styles.rightContainer}>
                <img className={styles.logoUrbanMode} src="../../public/urban mode_transparent.png" alt="logoUrbanMode" />
            </div>
        </nav>
    );
};


export default NavBar;