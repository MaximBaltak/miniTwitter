import React from 'react';
import styles from './Comments.module.scss'
import avatar from './../../../../img/avatar.png'
import Button from "../../../Layouts/Button/Button";
import OneComment from "./OneComment/OneComment";

const Comments = ({post, setCommentLike, changeNewComment, addNewComment}) => {
    return (
        <>
            <ul className={styles.comments}>
                {post.comments.map(comment => <li key={comment.id} className={styles.comments_comment}>
                    <OneComment comment={comment}
                                setCommentLike={setCommentLike}
                                avatar={post.avatar}/>
                </li>)}

            </ul>
            <div className={styles.container}>
                <img className={styles.container_avatar} src={localStorage.getItem('token') ? avatar : post.avatar}
                     alt='avatar'/>
                <div className={styles.container_wrapper}>
                    <input value={post.inputComment} onChange={e => changeNewComment(e.target.value, post.id)}
                           className={styles.container_wrapper_input} placeholder='Комментарий' type="text"/>
                    <Button click={addNewComment}
                            params1={post.id}
                            text='Написать'
                            width='87px'
                            height='23px'/>
                </div>
            </div>

        </>
    );
};

export default Comments;