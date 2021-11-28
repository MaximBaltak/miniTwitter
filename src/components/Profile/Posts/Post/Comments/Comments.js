import React from 'react';
import Button from "../../../../Layouts/Button/Button";
import styles from './Comments.module.scss'
import avatar from './../../../../../img/avatar.png'
import Comment from "./Comment/Comment";
const Comments = () => {
    return (
        <>
            <ul className={styles.comments}>
                <li className={styles.comments_comment}><Comment/></li>
                <li className={styles.comments_comment}><Comment/></li>
                <li className={styles.comments_comment}><Comment/></li>
                <li className={styles.comments_comment}><Comment/></li>
            </ul>
            <div className={styles.container}>
                <img className={styles.container_avatar} src={avatar} alt='avatar'/>
                <div className={styles.container_wrapper}>
                    <input className={styles.container_wrapper_input} placeholder='Комментарий' type="text"/>
                    <Button text='Написать' width='87px' height='23px'/>
                </div>
            </div>
        </>
    );
};

export default Comments;