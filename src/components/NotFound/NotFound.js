import React from 'react';
import styles from './NotFound.module.scss'
import notFound from './../../img/404.png'

const NotFound = () => {
    return (
        <div className={styles.content}>
            <img className={styles.content_image} src={notFound} alt="not found"/>
            <p className={styles.content_text}>По моему тут ни чего нет</p>
        </div>
    );
};

export default NotFound;