import React from 'react';
import styles from './Button.module.scss'
const Button = ({text,click,width,height,fontSize}) => {
    return <button className={styles.button} onClick={click} style={{width,height,fontSize}}>{text}</button>
};

export default Button;