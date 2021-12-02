import React from 'react';
import styles from './Posts.module.scss'
import Post from "./Post/Post";
const Posts = ({posts,showComments}) => {
    return (
        <ul className={styles.posts}>
            {posts.map(post=><li key={post.id} className={styles.posts_post}><Post showComments={showComments} post={post}/></li>)}
        </ul>
    );
};

export default Posts;