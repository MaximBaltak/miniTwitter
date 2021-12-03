import React from 'react';
import Button from "../../../../Layouts/Button/Button";
import styles from './Comments.module.scss'
import Comment from "./Comment/Comment"
import ava from './../../../../../img/avatar.png'
import {useParams} from "react-router-dom";
import {useTransition,animated} from "react-spring";

const Comments = ({avatar, post, changeNewComment, addNewComment, setCommentLike}) => {
    const params = useParams()
    let animations = useTransition(post.comments, {
        from: {
            opacity: 0,
            transform: `translateY(${100}px)`
        },
        enter: {
            opacity: 1,
            transform: `translateY(${0}px)`
        },
        leave: {
            opacity: 0,
            transform: `translateY(${100}px)`
        }
    })
    const onEnter=(e,postId,userId)=>{

        if(e.code==='Enter'&&e.altKey){
            addNewComment(postId,userId)
        }
    }
    return (
        <>
            <ul className={styles.comments}>
                {post.comments ? animations((props,comment) =>
                    <animated.li style={props} key={comment.id} className={styles.comments_comment}>
                        <Comment avatar={avatar}
                                 setCommentLike={setCommentLike}
                                 postId={post.id} comment={comment}/>
                    </animated.li>) : null}
            </ul>
            <div className={styles.container}>
                <img className={styles.container_avatar} src={localStorage.getItem('token') ? ava : avatar}
                     alt='avatar'/>
                <div className={styles.container_wrapper}>
                    <input value={post.inputComment} onChange={e => changeNewComment(e.target.value, post.id)}
                           onKeyUp={e=>onEnter(e,post.id,+params.id)}
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