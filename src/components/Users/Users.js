import React from 'react';
import styles from './Users.module.scss'
import icons from './../../img/icons.svg'
import User from "./User/User";

const Users = () => {
    return (
        <main className={styles.content}>
            <div className={styles.content_search}>
                <input className={styles.content_search_input} type="text" placeholder='Кого ищем?'/>
                <button className={styles.content_search_button}>
                    <svg className={styles.content_search_button_svg} >
                        <use xlinkHref={`${icons}#search`}/>
                    </svg>
                </button>
            </div>
            <ul className={styles.content_users}>
                <li className={styles.content_users_el}><User/></li>
                <li className={styles.content_users_el}><User/></li>
                <li className={styles.content_users_el}><User/></li>
                <li className={styles.content_users_el}><User/></li>
                <li className={styles.content_users_el}><User/></li>
                <li className={styles.content_users_el}><User/></li>
                <li className={styles.content_users_el}><User/></li>
                <li className={styles.content_users_el}><User/></li>
                <li className={styles.content_users_el}><User/></li>
                <li className={styles.content_users_el}><User/></li>
                <li className={styles.content_users_el}><User/></li>
                <li className={styles.content_users_el}><User/></li>
                <li className={styles.content_users_el}><User/></li>
                <li className={styles.content_users_el}><User/></li>
            </ul>

        </main>
    );
};

export default Users;