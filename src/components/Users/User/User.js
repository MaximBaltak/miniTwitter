import React from 'react';
import styles from './User.module.scss'
import icons from './../../../img/icons.svg'
import {NavLink} from "react-router-dom";

const User = ({id, name, toggleModal, avatar}) => {
    return (
        <div className={styles.card}>
            <NavLink className={styles.card_link} to={`/network/${id}`}>
                <img className={styles.card_avatar} src={avatar} alt='avatar'/>
                <p className={styles.card_name}>{name}</p>
                <p className={styles.card_countPost}>постов: 36</p>
            </NavLink>
            <button onClick={() => toggleModal(name)} className={styles.card_button} title='Подать жалобу'>
                <svg className={styles.card_button_svg}>
                    <use xlinkHref={`${icons}#complain`}/>
                </svg>
            </button>
        </div>
    );
};

export default User;