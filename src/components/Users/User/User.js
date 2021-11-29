import React from 'react';
import styles from './User.module.scss'
import avatar from './../../../img/avatar.png'
import icons from './../../../img/icons.svg'
const User = () => {
    return (
        <div className={styles.card}>
            <img className={styles.card_avatar} src={avatar} alt='avatar'/>
            <p className={styles.card_name}>Александр Попов</p>
            <p className={styles.card_countPost}>постов: 36</p>
            <button className={styles.card_button} title='Подать жалобу'>
                <svg className={styles.card_button_svg}>
                    <use xlinkHref={`${icons}#complain`}/>
                </svg>
            </button>
        </div>
    );
};

export default User;