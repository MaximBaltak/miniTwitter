import React from 'react';
import styles from './Posts.module.scss'
import Post from "./Post/Post";
const Posts = ({posts,showComments,deletePostId,changeNewComment,addNewComment}) => {
    return (
        <ul className={styles.posts}>
            {posts.map(post=><li key={post.id} className={styles.posts_post}>
                <Post
                    deletePostId={deletePostId}
                    showComments={showComments}
                    post={post}
                    addNewComment={addNewComment}
                    changeNewComment={changeNewComment}/>
            </li>)}
        </ul>
    );
};

export default Posts;