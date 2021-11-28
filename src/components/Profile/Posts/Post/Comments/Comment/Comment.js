import React from 'react';
import styles from './Comment.module.scss'
import avatar from './../../../../../../img/avatar.png'
import icons from "../../../../../../img/icons.svg";
const Comment = () => {
    return (
        <>
            <div className={styles.flex}>
                <img className={styles.flex_avatar} src={avatar} alt="avatar" title='Александр Попов'/>
                <p className={styles.flex_text}>Сегодня я закончил учёбу и получил диплом Frontend-разработчика, теперь можно есть печеньки </p>
                    <svg className={styles.flex_button}>
                        <use xlinkHref={`${icons}#like`}/>
                    </svg>
            </div>

        </>
    );
};

export default Comment;