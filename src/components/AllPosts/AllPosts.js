import React, {useEffect} from 'react';
import styles from './AllPosts.module.scss'
import OnePost from "./OnePost/OnePost";
import {useDispatch} from "react-redux";
import actions from "../../redux/actions/action";
import {useTransition, animated} from "react-spring";
import {useLocation} from "react-router-dom";

const AllPosts = ({
                      errorGetPosts,
                      posts,
                      showComments,
                      changeNewComment,
                      addNewComment,
                      setPostLike,
                      setCommentLike
                  }) => {
    let dispatch = useDispatch()
    const location=useLocation()
    localStorage.setItem('path',location.pathname)
    useEffect(() => {
        dispatch(actions.getPostsAll())
    }, [dispatch])
    let animations = useTransition(posts, {
        from: {
            opacity: 0,
            transform: `translateY(${100}px)`
        },
        enter: {
            opacity: 1,
            transform: `translateY(${0}px)`
        },

    })
    return (
        <main className={styles.content} style={{height: errorGetPosts ? '10%' : '100%'}}>
            {
                errorGetPosts ? <div className={styles.content_errorWrapper_error}>
                        <p className={styles.content_errorWrapper_error}>Упс! Что-то пошло не так</p>
                        <p className={styles.content_errorWrapper_text}>Попробуйте позднее</p>
                    </div> :
                    <ul className={styles.content_posts}>
                        {animations((props, post) =>
                            <animated.li style={props} key={post.id} className={styles.content_posts_post}>
                                <OnePost post={post}
                                         showComment={showComments}
                                         changeNewComment={changeNewComment}
                                         addNewComment={addNewComment}
                                         setCommentLike={setCommentLike}
                                         setPostLike={setPostLike}/>
                            </animated.li>)}
                    </ul>
            }
        </main>
    );
};

export default AllPosts;