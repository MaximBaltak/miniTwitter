import React from 'react';
import styles from './NewPost.module.scss'
import Button from "../../Layouts/Button/Button";

const NewPost = ({textNewPost, changeNewPost, addNewPost}) => {
    return (
        <div className={styles.newPost}>
            <label className={styles.newPost_title} htmlFor='newPost'>Новый пост:</label>
            <textarea value={textNewPost}
                      onChange={e => changeNewPost(e.target.value)}
                      className={styles.newPost_input}
                      name="newPost"
                      id="newPost"
                      placeholder='Что нового?'/>
            <Button click={addNewPost} text='Поделиться'/>
        </div>
    );
};

export default NewPost;