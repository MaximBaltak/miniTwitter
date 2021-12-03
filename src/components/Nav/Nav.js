import React from 'react';
import styles from './Nav.module.scss'
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import actions from "../../redux/actions/action";

const Nav = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const exit = () => {
        localStorage.removeItem('token')
        dispatch(actions.setAuth())
        navigate('/')
    }
    return (
        <nav className={styles.nav}>
            <h2 className={styles.nav_title}>Меню</h2>
            <hr className={styles.nav_el}/>
            <ul className={styles.nav_menu}>
                <li className={styles.nav_menu_el}>
                    <NavLink className={styles.nav_menu_el_link} to='/network/100'>Мой профиль</NavLink>
                </li>
                <li className={styles.nav_menu_el}>
                    <NavLink className={styles.nav_menu_el_link} to='/network/users'>Все пользователи</NavLink>
                </li>
                <li className={styles.nav_menu_el}>
                    <NavLink className={styles.nav_menu_el_link} to='/network/posts'>Все посты</NavLink>
                </li>
            </ul>
            <button onClick={exit} className={styles.nav_menu_exit}>Выйти</button>
        </nav>
    );
};

export default Nav;