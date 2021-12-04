import React from 'react';
import styles from './OnePost.module.scss'
import icons from '../../../img/icons.svg'
import Comments from "./Comments/Comments";

const OnePost = ({post, showComment, setPostLike, changeNewComment, addNewComment, setCommentLike}) => {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.container_avatar} src={post.avatar} alt="avatar" />
                <p className={styles.container_text}>{post.body}</p>
                <div className={styles.container_buttons}>
                    {post.countLikes === 0 ?
                        <div className={styles.container_buttons_wrapper}>
                            <svg onClick={() => setPostLike(post.id, 1)}
                                 className={styles.container_buttons_wrapper_like}>
                                <use xlinkHref={`${icons}#like`}/>
                            </svg>
                        </div> :
                        <div className={styles.container_buttons_wrapper}>
                            <svg onClick={() => setPostLike(post.id, -1)}
                                 className={styles.container_buttons_wrapper_like}>
                                <use xlinkHref={`${icons}#like-active`}/>
                            </svg>
                            <p className={styles.container_buttons_wrapper_count}>{post.countLikes}</p>
                        </div>
                    }
                </div>
            </div>
            <div className={styles.wrapper}>
                {post.showComments ?
                    <div>
                        <p className={styles.wrapper_countComments_write}
                           onClick={() => showComment(post.id)}>Скрыть все</p>
                        <Comments setCommentLike={setCommentLike}
                                  post={post}
                                  changeNewComment={changeNewComment}
                                  addNewComment={addNewComment}/>
                    </div>
                    :
                    <div>
                        <svg onClick={() => showComment(post.id)} className={styles.wrapper_commentsButton}>*/
                            <use xlinkHref={`${icons}#comments`}/>
                        </svg>
                        <p className={styles.wrapper_countComments}>{post?.comments?.length}</p>
                    </div>
                }
            </div>
        </>
    );
};

export default OnePost;