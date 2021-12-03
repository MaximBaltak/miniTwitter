import React, {useState} from 'react';
import styles from './Header.module.scss'
import logo from '../../img/logo.png'
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import actions from "../../redux/actions/action";

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let [activeHamburger, setActiveHamburger] = useState(false)
    const exit = () => {
        localStorage.removeItem('token')
        setActiveHamburger(prev => !prev)
        dispatch(actions.setAuth())
        navigate('/')
    }
    const toggleHamburger = () => {
        if (localStorage.getItem('token')) {
            setActiveHamburger(prev => !prev)
        }
    }
    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <img className={styles.header_container_logo} src={logo} alt="logo" title='Логотип'/>
                <h1 className={styles.header_container_title}>New Network</h1>
                <button onClick={toggleHamburger} className={styles.header_container_hamburger}>
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
                    <li className={styles.overlay_nav_link}>
                        <NavLink className={styles.overlay_nav_link_a} to='/network/100'>Мой профиль</NavLink>
                    </li>
                    <li className={styles.overlay_nav_link}>
                        <NavLink className={styles.overlay_nav_link_a} to='/network/users'>Все пользователи</NavLink>
                    </li>
                    <li className={styles.overlay_nav_link}>
                        <NavLink className={styles.overlay_nav_link_a} to='/network/posts'>Все посты</NavLink>
                    </li>
                    <li className={styles.overlay_nav_link}>
                        <button onClick={exit}
                                className={styles.overlay_nav_link_exit}>Выйти
                        </button>
                    </li>
                </ul>
            </div> : null}
        </header>
    );
};

export default Header;