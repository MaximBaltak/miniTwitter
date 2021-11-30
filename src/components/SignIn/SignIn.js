import React from 'react';
import styles from './SignIn.module.scss'
import {useNavigate} from "react-router-dom";
const SignIn = () => {
    const navigate=useNavigate()
    return (
        <div className={styles.content}>
            <button onClick={()=>navigate('/network/1')} className={styles.content_signIn}>Войти</button>
        </div>
    );
};

export default SignIn;