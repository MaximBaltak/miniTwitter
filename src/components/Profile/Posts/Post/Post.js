import React, {useEffect} from 'react';
import styles from './Post.module.scss'
import avatar from '../../../../img/avatar.png'
import icons from '../../../../img/icons.svg'
import Comments from "./Comments/Comments";
import {useDispatch} from "react-redux";
import actions from "../../../../redux/actions/action";
const Post = ({post,showComments}) => {
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(actions.getComments(post.id))
    },[])
    return (
        <>
            <div className={styles.container}>
                <img className={styles.container_avatar} src={avatar} alt="avatar" title='Александр Попов'/>
                <p className={styles.container_text}>{post.body}</p>
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
                {post.showComments?
                    <div>
                    <p className={styles.wrapper_countComments_write} onClick={()=>showComments(post.id)}>Скрыть все</p>
                    <Comments comments={post.comments} />
                    </div>
                    :
                    <div>
                    <svg onClick={()=>showComments(post.id)} className={styles.wrapper_commentsButton}>*/
                        <use xlinkHref={`${icons}#comments`}/>*/
                    </svg>
                    <p className={styles.wrapper_countComments}>{post?.comments?.length}</p>
                    </div>
                }
            </div>
        </>
    );
};

export default Post;