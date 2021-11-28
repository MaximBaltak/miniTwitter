import React from 'react';
import styles from './NewPost.module.scss'
import Button from "../../Layouts/Button/Button";

const NewPost = () => {
    return (
        <div className={styles.newPost}>
            <label className={styles.newPost_title} htmlFor='newPost'>Новый пост:</label>
            <textarea className={styles.newPost_input} name="newPost" id="newPost" placeholder='Что нового?'/>
            <Button text='Подписаться'/>
        </div>
    );
};

export default NewPost;