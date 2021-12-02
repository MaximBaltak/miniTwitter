import React from 'react';
import styles from './Button.module.scss'
const Button = ({text,click,width,height,fontSize,borderColor,color}) => {
    return <button className={styles.button} onClick={click} style={{width,height,fontSize,borderColor, color}}>{text}</button>
};

export default Button;