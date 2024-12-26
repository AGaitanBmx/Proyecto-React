import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img className={styles.logo} src='../../public/urban mode_transparent.png' alt="UrbanMode Logo" />
            <p>Proyecto de e-commerce desarrollado con React y Firebase.</p>
        </footer>
    );
};

export default Footer;