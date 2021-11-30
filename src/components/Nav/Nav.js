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
                    <NavLink className={styles.nav_menu_el_link} to='/network/:id'>Мой профиль</NavLink>
                </li>
                <li className={styles.nav_menu_el}>
                    <NavLink className={styles.nav_menu_el_link} to='/network/users'>Все пользователи</NavLink>
                </li>
                <li className={styles.nav_menu_el}>
                    <NavLink className={styles.nav_menu_el_link} to='/network/posts'>Все посты</NavLink>
                </li>
            </ul>
            <NavLink className={styles.nav_menu_exit} to='/'>Выйти</NavLink>
        </nav>
    );
};

export default Nav;