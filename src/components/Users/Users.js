import React, {useEffect} from 'react';
import styles from './Users.module.scss'
import icons from './../../img/icons.svg'
import User from "./User/User";
import {useDispatch} from "react-redux";
import actions from "../../redux/actions/action";
import Complain from "./Complain/Complain";
import {useLocation} from "react-router-dom";

const Users = ({
                   errorGetUsers,
                   users,
                   value,
                   inputValue,
                   inputModal,
                   submitModal,
                   search,
                   modal,
                   showModal,
                   toggleModal
               }) => {
    const dispatch = useDispatch()
    const location=useLocation()
    localStorage.setItem('path',location.pathname)
    useEffect(() => {
        dispatch(actions.getUsers())
    }, [dispatch])
    const onEnter=e=>{
        if(e.code==='Enter'&&e.altKey){
            search()
        }
    }
    return (
        <main className={styles.content}>
            {
                errorGetUsers ? <div className={styles.content_errorWrapper}>
                        <p className={styles.content_errorWrapper_error}>Упс! Что-то пошло не так</p>
                        <p className={styles.content_errorWrapper_text}>Попробуйте позднее</p>
                    </div> :
                    <div>
                        <div className={styles.content_search}>
                            <input value={value}
                                   onChange={e => inputValue(e.target.value)}
                                   className={styles.content_search_input}
                                   onKeyUp={onEnter}
                                   type="text" placeholder='Кого ищем?'/>
                            <button onClick={search} className={styles.content_search_button}>
                                <svg className={styles.content_search_button_svg}>
                                    <use xlinkHref={`${icons}#search`}/>
                                </svg>
                            </button>
                        </div>
                        <ul className={styles.content_users}>
                            {
                                users.length>0 ? users.map(user =>
                                    <li key={user.id} className={styles.content_users_el}>
                                        <User posts={user.p} toggleModal={toggleModal} id={user.id} avatar={user.avatar}
                                              name={user.name}/></li>
                                ) : <p className={styles.content_errorWrapper_error}>Ни чего не найдено</p>
                            }
                        </ul>
                    </div>
            }
            {showModal ? <Complain inputComplain={inputModal}
                                   submitComplain={submitModal}
                                   toggleModal={toggleModal}
                                   modal={modal}/> : null}
        </main>
    );
};

export default Users;