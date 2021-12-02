import React from 'react';
import Button from "../../../../Layouts/Button/Button";
import styles from './Comments.module.scss'
import Comment from "./Comment/Comment"
import ava from './../../../../../img/avatar.png'
import {useParams} from "react-router-dom";

const Comments = ({avatar, post, changeNewComment, addNewComment, setCommentLike}) => {
    const params = useParams()
    return (
        <>
            <ul className={styles.comments}>
                {post.comments ? post.comments.map((comment, i) =>
                    <li key={i} className={styles.comments_comment}>
                        <Comment avatar={avatar}
                                 setCommentLike={setCommentLike}
                                 postId={post.id} comment={comment}/>
                    </li>) : null}
            </ul>
            <div className={styles.container}>
                <img className={styles.container_avatar} src={localStorage.getItem('token') ? ava : avatar}
                     alt='avatar'/>
                <div className={styles.container_wrapper}>
                    <input value={post.inputComment} onChange={e => changeNewComment(e.target.value, post.id)}
                           className={styles.container_wrapper_input} placeholder='Комментарий' type="text"/>
                    <Button click={addNewComment}
                            params1={post.id}
                            params2={+params.id}
                            text='Написать'
                            width='87px'
                            height='23px'/>
                </div>
            </div>
        </>
    );
};

export default Comments;