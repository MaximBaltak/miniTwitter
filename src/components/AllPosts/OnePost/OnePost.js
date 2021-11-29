import React from 'react';
import styles from './OnePost.module.scss'
import avatar from '../../../img/avatar.png'
import icons from '../../../img/icons.svg'
import Comments from "./Comments/Comments";

const OnePost = () => {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.container_avatar} src={avatar} alt="avatar" title='Александр Попов'/>
                <p className={styles.container_text}>Сегодня я закончил учёбу и получил диплом Frontend-разработчика,
                    теперь можно есть печеньки </p>
                <div className={styles.container_buttons}>
                    <svg className={styles.container_buttons_button}>
                        <use xlinkHref={`${icons}#like`}/>
                    </svg>
                </div>
            </div>
            <div className={styles.wrapper}>
                {/*<svg className={styles.wrapper_commentsButton}>*/}
                {/*    <use xlinkHref={`${icons}#comments`}/>*/}
                {/*</svg>*/}
                <Comments/>
            </div>
        </>
    );
};

export default OnePost;