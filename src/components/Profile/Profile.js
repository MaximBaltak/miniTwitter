import React from 'react';
import styles from './Profile.module.scss'
import backgroundProfile from './../../img/backgroundProfile.png'
import avatar from './../../img/avatar.png'
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";
const Profile = () => {
    return (
        <main className={styles.content}>
            <img className={styles.content_background} src={backgroundProfile} alt="background"/>
            <div className={styles.content_profile}>
                <div className={styles.content_profile_flex}>
                    <img className={styles.content_profile_flex_avatar} src={avatar} alt="avatar"
                         title='Александр Попов'/>
                    <p className={styles.content_profile_flex_name}>Александр Попов</p>
                    <div className={styles.content_profile_flex_information}>
                        <p className={styles.content_profile_flex_information_el}>город: <span>Калининград</span></p>
                        <p className={styles.content_profile_flex_information_el}>email: <span>alexandr30@mail.ru</span>
                        </p>
                        <p className={styles.content_profile_flex_information_el}>телефон: <span>+7 (909) 786-98-08</span>
                        </p>
                    </div>
                </div>
                <div className={styles.content_profile_newPost}>
                    <NewPost/>
                </div>
                <Posts/>
            </div>
        </main>
    );
};

export default Profile;