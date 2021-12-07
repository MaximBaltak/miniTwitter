import React, {useState} from 'react';
import styles from './Header.module.scss'
import logo from '../../img/logo.png'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import actions from "../../redux/actions/action";
import {useTransition, animated} from "react-spring";

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let [activeHamburger, setActiveHamburger] = useState(false)
    const exit = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('path')
        setActiveHamburger(prev => !prev)
        dispatch(actions.setAuth())
        navigate('/')
    }
    const click = (path) => {
        setActiveHamburger(prev => !prev)
        navigate(path)
    }
    const toggleHamburger = () => {
        if (localStorage.getItem('token')) {
            setActiveHamburger(prev => !prev)
        }
    }
    let animation = useTransition(activeHamburger, {
        from: {
            transform: `translateX(${900}px)`
        },
        enter: {
            transform: `translateX(${0}px)`
        },
        leave: {
            transform: `translateX(${900}px)`
        }
    })
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
            {animation((props, activeHamburger) =>
                activeHamburger ? <animated.div style={props} className={styles.overlay}>
                    <ul className={styles.overlay_nav}>
                        <li className={styles.overlay_nav_link}>
                            <button onClick={() => click('/network/100')} className={styles.overlay_nav_link_a}>Мой
                                профиль
                            </button>
                        </li>
                        <li className={styles.overlay_nav_link}>
                            <button onClick={() => click('/network/users')} className={styles.overlay_nav_link_a}>Все
                                пользователи
                            </button>
                        </li>
                        <li className={styles.overlay_nav_link}>
                            <button onClick={() => click('/network/posts')} className={styles.overlay_nav_link_a}>Все
                                посты
                            </button>
                        </li>
                        <li className={styles.overlay_nav_link}>
                            <button onClick={exit}
                                    className={styles.overlay_nav_link_exit}>Выйти
                            </button>
                        </li>
                    </ul>
                </animated.div> : null)}
        </header>
    );
};

export default Header;