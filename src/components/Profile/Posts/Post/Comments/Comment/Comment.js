import React from 'react';
import styles from './Comment.module.scss'
import avatar from './../../../../../../img/avatar.png'
import icons from "../../../../../../img/icons.svg";
const Comment = ({comment}) => {

    return (
        <>
            <div className={styles.flex}>
                <img className={styles.flex_avatar} src={avatar} alt="avatar" title='Александр Попов'/>
                <p className={styles.flex_text}>{comment.body}</p>
                    <svg className={styles.flex_button}>
                        <use xlinkHref={`${icons}#like`}/>
                    </svg>
            </div>

        </>
    );
};

export default Comment;