import React, {useEffect} from 'react';
import styles from './AllPosts.module.scss'
import OnePost from "./OnePost/OnePost";
import {useDispatch} from "react-redux";
import actions from "../../redux/actions/action";
import {useTransition,animated} from "react-spring";

const AllPosts = ({posts, showComments, changeNewComment, addNewComment, setPostLike, setCommentLike}) => {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.getPostsAll())
    }, [])
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
        <main className={styles.content}>
            <ul className={styles.content_posts}>
                {animations((props,post) =>
                    <animated.li style={props} key={post.id} className={styles.content_posts_post}>
                    <OnePost post={post}
                             showComment={showComments}
                             changeNewComment={changeNewComment}
                             addNewComment={addNewComment}
                             setCommentLike={setCommentLike}
                             setPostLike={setPostLike}/>
                </animated.li>)}
            </ul>
        </main>
    );
};

export default AllPosts;