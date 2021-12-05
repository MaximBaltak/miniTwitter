import React from 'react';
import styles from './SignIn.module.scss'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import actions from "../../redux/actions/action";

const SignIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const login = () => {
        localStorage.setItem('token', '8020')
        dispatch(actions.setAuth())
        navigate('/network/100')
    }
    return (
        <div className={styles.content}>
            <button onClick={login} className={styles.content_signIn}>Войти</button>
        </div>
    );
};

export default SignIn;