import React from 'react';
import styles from './OneComment.module.scss'
import icons from "../../../../../img/icons.svg";

const OneComment = ({avatar, setCommentLike, comment}) => {
    return (
        <>
            <div className={styles.flex}>
                <img className={styles.flex_avatar} src={comment?.avatar ? comment.avatar : avatar} alt="avatar"
                     title='Александр Попов'/>
                <p className={styles.flex_text}>{comment.body}</p>
                {comment.countLikes === 0 ?
                    <div onClick={() => setCommentLike(comment.postId, comment.id, 1)} className={styles.flex_wrapper}>
                        <svg className={styles.flex_button}>
                            <use xlinkHref={`${icons}#like`}/>
                        </svg>
                    </div> :
                    <div onClick={() => setCommentLike(comment.postId, comment.id, -1)} className={styles.flex_wrapper}>
                        <svg className={styles.flex_wrapper_like}>
                            <use xlinkHref={`${icons}#like-active`}/>
                        </svg>
                        <p className={styles.flex_wrapper_count}>{comment.countLikes}</p>
                    </div>
                }
            </div>
        </>
    );
};

export default OneComment;