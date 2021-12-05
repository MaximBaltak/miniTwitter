import React, {useEffect, useState} from 'react';
import styles from './Profile.module.scss'
import backgroundProfile from './../../img/backgroundProfile.png'
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import actions from "../../redux/actions/action";
import {useTransition, animated} from "react-spring";

const Profile = ({
                     errorGetUser,
                     erroeGetComments,
                     user,
                     posts,
                     textNewPost,
                     showComments,
                     changeNewPost,
                     changeNewComment,
                     addNewPost,
                     addNewComment,
                     deletePostId,
                     setPostLike,
                     setCommentLike
                 }) => {
    let params = useParams()
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.getUser(params.id))
    }, [params.id])
    let [showInfo, setShowInfo] = useState(false)
    let [fullscreen, setfullscreen] = useState(false)
    let animation = useTransition(fullscreen, {
        from: {
            opacity: 0,
            transform: `translateX(${100}px)`
        },
        enter: {
            opacity: 1,
            transform: `translateX(${0}px)`
        },
        leave: {
            opacity: 0,
            transform: `translateX(${-100}px)`
        }

    })
    return (
        <main className={styles.content}>
            <img className={styles.content_background} src={backgroundProfile} alt="background"/>
            <div className={styles.content_profile}>
                {
                    errorGetUser ? <div className={styles.content_profile_errorWrapper}>
                            <p className={styles.content_profile_errorWrapper_error}>Упс! Что-то пошло не так</p>
                            <p className={styles.content_profile_errorWrapper_text}>Попробуйте позднее</p>
                        </div> :
                        <div>
                            <div className={styles.content_profile_flex}>
                                <img onClick={() => setfullscreen(prev => !prev)}
                                     className={styles.content_profile_flex_avatar}
                                     src={user.avatar} alt="avatar"
                                     title={user.name}/>
                                <p className={styles.content_profile_flex_name}>{user.name}</p>
                                <div
                                    className={[styles.content_profile_flex_information, showInfo ? styles.content_profile_flex_activeInformation : ''].join(' ')}>
                                    <p className={styles.content_profile_flex_information_el}>город: <span>{user.city}</span>
                                    </p>
                                    <p className={styles.content_profile_flex_information_el}>email: <span>{user.email}</span>
                                    </p>
                                    <p className={styles.content_profile_flex_information_el}>телефон: <span>{user.tele}</span>
                                    </p>
                                </div>
                                <p onClick={() => setShowInfo(prev => !prev)}
                                   className={styles.content_profile_flex_desc}>Подробнее</p>
                            </div>
                            <div className={styles.content_profile_newPost}>
                                {params.id === '100' ? <NewPost addNewPost={addNewPost} textNewPost={textNewPost}
                                                                changeNewPost={changeNewPost}/> : null}
                            </div>
                            <Posts avatar={user.avatar} setLikePost={setPostLike} setLikeComment={setCommentLike}
                                   deletePostId={deletePostId} showComments={showComments} posts={posts}
                                   changeNewComment={changeNewComment} addNewComment={addNewComment}/>
                        </div>

                }

            </div>
            {animation((props, fullscreen) =>
                fullscreen ? <animated.div style={props} onClick={() => setfullscreen(prev => !prev)}
                                           className={styles.content_fullscreen}>
                    <img className={styles.content_fullscreen_logo} src={user.avatar} alt="logo"/>
                </animated.div> : null
            )}
        </main>
    );
};

export default Profile;