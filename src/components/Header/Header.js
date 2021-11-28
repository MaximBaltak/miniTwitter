import React from 'react';
import styles from './Header.module.scss'
import logo from '../../img/logo.png'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <img className={styles.header_container_logo} src={logo} alt="logo" title='Логотип'/>
                <h1 className={styles.header_container_title}>New Network</h1>
                <button className={styles.header_container_hamburger}>
                    <div className={styles.header_container_hamburger_el}/>
                    <div className={styles.header_container_hamburger_el}/>
                    <div className={styles.header_container_hamburger_el}/>
                </button>
            </div>
        </header>
    );
};

export default Header;