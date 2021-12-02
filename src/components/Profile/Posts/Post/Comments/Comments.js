import React from 'react';
import Button from "../../../../Layouts/Button/Button";
import styles from './Comments.module.scss'
import avatar from './../../../../../img/avatar.png'
import Comment from "./Comment/Comment";
const Comments = ({comments}) => {
    return (
        <>
            <ul className={styles.comments}>
                {comments? comments.map((comment,i)=>
                    <li key={i} className={styles.comments_comment}><Comment comment={comment} /></li>):null}
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