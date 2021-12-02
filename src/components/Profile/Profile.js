import React, {useEffect, useState} from 'react';
import styles from './Profile.module.scss'
import backgroundProfile from './../../img/backgroundProfile.png'
import avatar from './../../img/avatar.png'
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import actions from "../../redux/actions/action";

const Profile = ({user,posts,textNewPost,showComments,changeNewPost,changeNewComment,addNewPost,addNewComment,deletePostId}) => {
    let params=useParams()
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(actions.getUser(params.id))
    },[])
    let [showInfo, setShowInfo] = useState(false)
    return (
        <main className={styles.content}>
            <img className={styles.content_background} src={backgroundProfile} alt="background"/>
            <div className={styles.content_profile}>
                <div className={styles.content_profile_flex}>
                    <img className={styles.content_profile_flex_avatar} src={avatar} alt="avatar"
                         title='Александр Попов'/>
                    <p className={styles.content_profile_flex_name}>{user.name}</p>
                    <div
                        className={[styles.content_profile_flex_information, showInfo ? styles.content_profile_flex_activeInformation : ''].join(' ')}>
                        <p className={styles.content_profile_flex_information_el}>город: <span>{user.city}</span></p>
                        <p className={styles.content_profile_flex_information_el}>email: <span>{user.email}</span>
                        </p>
                        <p className={styles.content_profile_flex_information_el}>телефон: <span>{user.tele}</span>
                        </p>
                    </div>
                    <p onClick={() => setShowInfo(prev => !prev)}
                       className={styles.content_profile_flex_desc}>Подробнее</p>
                </div>
                <div className={styles.content_profile_newPost}>
                    <NewPost addNewPost={addNewPost} textNewPost={textNewPost} changeNewPost={changeNewPost}/>
                </div>
                <Posts deletePostId={deletePostId} showComments={showComments} posts={posts} changeNewComment={changeNewComment} addNewComment={addNewComment}/>
            </div>
        </main>
    );
};

export default Profile;