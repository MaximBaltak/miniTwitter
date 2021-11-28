import React from 'react';
import styles from './Posts.module.scss'
import Post from "./Post/Post";
const Posts = () => {
    return (
        <ul className={styles.posts}>
            <li className={styles.posts_post}><Post/></li>
        </ul>
    );
};

export default Posts;