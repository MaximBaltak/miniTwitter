import React from 'react';
import styles from './AllPosts.module.scss'
import OnePost from "./OnePost/OnePost";
const AllPosts = () => {
    return (
        <main className={styles.content}>
            <ul className={styles.content_posts}>
                <li className={styles.content_posts_post}><OnePost/></li>
                <li className={styles.content_posts_post}><OnePost/></li>
                <li className={styles.content_posts_post}><OnePost/></li>
                <li className={styles.content_posts_post}><OnePost/></li>
                <li className={styles.content_posts_post}><OnePost/></li>
                <li className={styles.content_posts_post}><OnePost/></li>

            </ul>
        </main>
    );
};

export default AllPosts;