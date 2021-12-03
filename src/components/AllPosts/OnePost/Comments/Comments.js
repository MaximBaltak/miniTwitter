import React from 'react';
import styles from './Comments.module.scss'
import avatar from './../../../../img/avatar.png'
import Button from "../../../Layouts/Button/Button";
import OneComment from "./OneComment/OneComment";
import {useTransition,animated} from "react-spring";

const Comments = ({post, setCommentLike, changeNewComment, addNewComment}) => {
    let animations = useTransition(post.comments, {
        from: {
            opacity: 0,
            transform: `translateY(${100}px)`
        },
        enter: {
            opacity: 1,
            transform: `translateY(${0}px)`
        },
        leave:{
            opacity: 0,
            transform: `translateY(${100}px)`
        },

    })
    const onEnter=(e,postId)=>{
        if(e.code==='Enter'&&e.altKey){
            addNewComment(postId)
        }
    }
    return (
        <>
            <ul className={styles.comments}>
                {animations((props,comment) =>
                    <animated.li style={props} key={comment.id} className={styles.comments_comment}>
                    <OneComment comment={comment}
                                setCommentLike={setCommentLike}
                                avatar={post.avatar}/>
                </animated.li>)}

            </ul>
            <div className={styles.container}>
                <img className={styles.container_avatar} src={localStorage.getItem('token') ? avatar : post.avatar}
                     alt='avatar'/>
                <div className={styles.container_wrapper}>
                    <input value={post.inputComment} onChange={e => changeNewComment(e.target.value, post.id)}
                           onKeyUp={e=>onEnter(e,post.id)}
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