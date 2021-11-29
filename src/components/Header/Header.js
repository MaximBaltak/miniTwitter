import React, {useState} from 'react';
import styles from './Header.module.scss'
import logo from '../../img/logo.png'

const Header = () => {
    let [activeHamburger, setActiveHamburger] = useState(false)
    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <img className={styles.header_container_logo} src={logo} alt="logo" title='Логотип'/>
                <h1 className={styles.header_container_title}>New Network</h1>
                <button onClick={() => setActiveHamburger(prev => !prev)} className={styles.header_container_hamburger}>
                    <div
                        className={[styles.header_container_hamburger_el, activeHamburger ? styles.header_container_hamburger_active1 : ''].join(' ')}/>
                    <div
                        className={[styles.header_container_hamburger_el, activeHamburger ? styles.header_container_hamburger_active2 : ''].join(' ')}/>
                    <div
                        className={[styles.header_container_hamburger_el, activeHamburger ? styles.header_container_hamburger_active3 : ''].join(' ')}/>
                </button>
            </div>
            {activeHamburger ? <div className={styles.overlay}>
                <ul className={styles.overlay_nav}>
                    <li className={styles.overlay_nav_link}>Мой профиль</li>
                    <li className={styles.overlay_nav_link}>Все пользователи</li>
                    <li className={styles.overlay_nav_link}>Все посты</li>
                </ul>
            </div> : null}
        </header>
    );
};

export default Header;