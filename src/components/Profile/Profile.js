import React, {useState} from 'react';
import styles from './Profile.module.scss'
import backgroundProfile from './../../img/backgroundProfile.png'
import avatar from './../../img/avatar.png'
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";

const Profile = () => {
    let [showInfo, setShowInfo] = useState(false)
    return (
        <main className={styles.content}>
            ё
            <div className={styles.content_profile}>
                <div className={styles.content_profile_flex}>
                    <img className={styles.content_profile_flex_avatar} src={avatar} alt="avatar"
                         title='Александр Попов'/>
                    <p className={styles.content_profile_flex_name}>Александр Попов</p>
                    <div
                        className={[styles.content_profile_flex_information, showInfo ? styles.content_profile_flex_activeInformation : ''].join(' ')}>
                        <p className={styles.content_profile_flex_information_el}>город: <span>Калининград</span></p>
                        <p className={styles.content_profile_flex_information_el}>email: <span>alexandr30@mail.ru</span>
                        </p>
                        <p className={styles.content_profile_flex_information_el}>телефон: <span>+7 (909) 786-98-08</span>
                        </p>
                    </div>
                    <p onClick={() => setShowInfo(prev => !prev)}
                       className={styles.content_profile_flex_desc}>Подробнее</p>
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