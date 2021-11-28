import React from 'react';
import styles from './Nav.module.scss'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <h2 className={styles.nav_title}>Меню</h2>
            <hr className={styles.nav_el}/>
            <ul className={styles.nav_menu}>
                <li className={styles.nav_menu_el}>
                    <a className={styles.nav_menu_el_link} href='#'>Мой профиль</a>
                </li>
                <li className={styles.nav_menu_el}>
                    <a className={styles.nav_menu_el_link} href='#'>Все пользователи</a>
                </li>
                <li className={styles.nav_menu_el}>
                    <a className={styles.nav_menu_el_link} href='#'>Все посты</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;