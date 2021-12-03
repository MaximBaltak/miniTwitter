import React from 'react';
import styles from './Posts.module.scss'
import Post from "./Post/Post";
import {useTransition,animated} from "react-spring";

const Posts = ({
                   avatar,
                   posts,
                   showComments,
                   deletePostId,
                   changeNewComment,
                   addNewComment,
                   setLikePost,
                   setLikeComment
               }) => {
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
        <ul className={styles.posts}>
            {animations((props,post) =>
                <animated.li style={props} key={post.id} className={styles.posts_post}>
                <Post
                    deletePostId={deletePostId}
                    showComments={showComments}
                    post={post}
                    addNewComment={addNewComment}
                    changeNewComment={changeNewComment}
                    setLikePost={setLikePost}
                    setLikeComment={setLikeComment}
                    avatar={avatar}
                />
            </animated.li>)}
        </ul>
    );
};

export default Posts;