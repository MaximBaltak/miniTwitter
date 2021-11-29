import React from 'react';
import styles from './Post.module.scss'
import avatar from '../../../../img/avatar.png'
import icons from '../../../../img/icons.svg'
import Comments from "./Comments/Comments";
const Post = () => {

    return (
        <>
            <div className={styles.container}>
                <img className={styles.container_avatar} src={avatar} alt="avatar" title='Александр Попов'/>
                <p className={styles.container_text}>Сегодня я закончил учёбу и получил диплом Frontend-разработчика, теперь можно есть печеньки </p>
                <div className={styles.container_buttons}>
                    <div className={styles.container_buttons_wrapper}>
                        <svg className={styles.container_buttons_wrapper_like}>
                            <use xlinkHref={`${icons}#like-active`}/>
                        </svg>
                        <p className={styles.container_buttons_wrapper_count}>99+</p>
                    </div>
                    <svg className={styles.container_buttons_button}>
                        <use xlinkHref={`${icons}#delete`}/>
                    </svg>
                </div>
            </div>
            <div className={styles.wrapper}>
                <svg className={styles.wrapper_commentsButton}>
                    <use xlinkHref={`${icons}#comments`}/>
                </svg>
                {/*    <Comments />*/}
            </div>
        </>
    );
};

export default Post;