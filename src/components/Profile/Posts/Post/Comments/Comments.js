import React from 'react';
import Button from "../../../../Layouts/Button/Button";
import styles from './Comments.module.scss'
import avatar from './../../../../../img/avatar.png'
import Comment from "./Comment/Comment";
const Comments = ({post,changeNewComment,addNewComment}) => {
    return (
        <>
            <ul className={styles.comments}>
                {post.comments? post.comments.map((comment,i)=>
                    <li key={i} className={styles.comments_comment}><Comment comment={comment} /></li>):null}
            </ul>
            <div className={styles.container}>
                <img className={styles.container_avatar} src={avatar} alt='avatar'/>
                <div className={styles.container_wrapper}>
                    <input value={post.inputComment} onChange={e=>changeNewComment(e.target.value,post.id )} className={styles.container_wrapper_input} placeholder='Комментарий' type="text"/>
                    <Button click={addNewComment} params1={post.id}  text='Написать' width='87px' height='23px'/>
                </div>
            </div>
        </>
    );
};

export default Comments;