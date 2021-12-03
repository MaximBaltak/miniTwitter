import React, {useEffect} from 'react';
import styles from './AllPosts.module.scss'
import OnePost from "./OnePost/OnePost";
import {useDispatch} from "react-redux";
import actions from "../../redux/actions/action";

const AllPosts = ({posts, showComments, changeNewComment, addNewComment, setPostLike, setCommentLike}) => {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.getPostsAll())
    }, [])
    return (
        <main className={styles.content}>
            <ul className={styles.content_posts}>
                {posts.map(post => <li key={post.id} className={styles.content_posts_post}>
                    <OnePost post={post}
                             showComment={showComments}
                             changeNewComment={changeNewComment}
                             addNewComment={addNewComment}
                             setCommentLike={setCommentLike}
                             setPostLike={setPostLike}/>
                </li>)}
            </ul>
        </main>
    );
};

export default AllPosts;