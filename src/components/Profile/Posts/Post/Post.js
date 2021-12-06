import React, {useEffect} from 'react';
import styles from './Post.module.scss'
import icons from '../../../../img/icons.svg'
import Comments from "./Comments/Comments";
import {useDispatch} from "react-redux";
import actions from "../../../../redux/actions/action";
import {useParams} from "react-router-dom";

const Post = ({
                  avatar,
                  post,
                  showComments,
                  deletePostId,
                  changeNewComment,
                  addNewComment,
                  setLikePost,
                  setLikeComment
              }) => {
    const params = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.getComments(post.id))
    }, [dispatch,post])
    return (
        <>
            <div className={styles.container}>
                <img className={styles.container_avatar} src={avatar} alt="avatar" title='Александр Попов'/>
                <p className={styles.container_text}>{post.body}</p>
                <div className={styles.container_buttons}>
                    {post.countLikes === 0 ?
                        <div className={styles.container_buttons_wrapper}>
                            <svg onClick={() => setLikePost(post.id, 1)}
                                 className={styles.container_buttons_wrapper_like}>
                                <use xlinkHref={`${icons}#like`}/>
                            </svg>
                        </div> :
                        <div className={styles.container_buttons_wrapper}>
                            <svg onClick={() => setLikePost(post.id, -1)}
                                 className={styles.container_buttons_wrapper_like}>
                                <use xlinkHref={`${icons}#like-active`}/>
                            </svg>
                            <p className={styles.container_buttons_wrapper_count}>{post.countLikes}</p>
                        </div>
                    }
                    {params.id === '100' ?
                        <svg onClick={() => deletePostId(post.id)} className={styles.container_buttons_button}>
                            <use xlinkHref={`${icons}#delete`}/>
                        </svg> : null}
                </div>
            </div>
            <div className={styles.wrapper}>
                {post.showComments ?
                    <div>
                        <p className={styles.wrapper_countComments_write}
                           onClick={() => showComments(post.id)}>Скрыть все</p>
                        <Comments avatar={avatar}
                                  setCommentLike={setLikeComment}
                                  post={post}
                                  changeNewComment={changeNewComment}
                                  addNewComment={addNewComment}/>
                    </div>
                    :
                    <div>
                        <svg onClick={() => showComments(post.id)} className={styles.wrapper_commentsButton}>*/
                            <use xlinkHref={`${icons}#comments`}/>
                        </svg>
                        <p className={styles.wrapper_countComments}>{post?.comments?.length}</p>
                    </div>
                }
            </div>
        </>
    );
};

export default Post;