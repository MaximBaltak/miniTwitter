import React from 'react';
import styles from './Complain.module.scss'
import Button from "../../Layouts/Button/Button";

const Complain = ({modal, toggleModal, inputComplain, submitComplain}) => {
    const watchClick = e => {
        if (e.target.id === 'overlay') {
            toggleModal()
        }
    }
    const onEnter=e=>{
        if(e.code==='Enter'&&e.altKey){
            submitComplain()
        }
    }
    return (
        <div id='overlay' onClick={watchClick} className={styles.overlay}>
            <div className={styles.window}>
                <h2 className={styles.window_title}>Форма жалобы</h2>
                <div className={styles.window_wrapper}>
                    <p className={styles.window_wrapper_text}>На кого: {modal.to}</p>
                    <p className={styles.window_wrapper_text}>От кого: {modal.from}</p>
                    {modal.error ? <p style={{color: 'red', fontSize: '20px'}}>Поле не заполнено</p> : null}
                    <textarea value={modal.inputComplain}
                              onChange={e => inputComplain(e.target.value)}
                              onKeyUp={onEnter}
                              className={styles.window_input}
                              placeholder='Сообщение'/>
                    <Button click={submitComplain}
                            width='197px'
                            height='52px'
                            text='Отправить'/>
                </div>
            </div>
        </div>

    );
};

export default Complain;