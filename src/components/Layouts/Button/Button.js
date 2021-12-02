import React from 'react';
import styles from './Button.module.scss'

const Button = ({text, click, width, height, fontSize, borderColor, color, params1, params2}) => {
    return <button className={styles.button}
                   onClick={() => click(params1, params2)}
                   style={{width, height, fontSize, borderColor, color}}>{text}</button>
};

export default Button;