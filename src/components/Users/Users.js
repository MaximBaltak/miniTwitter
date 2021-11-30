import React, {useEffect} from 'react';
import styles from './Users.module.scss'
import icons from './../../img/icons.svg'
import User from "./User/User";
import {useDispatch} from "react-redux";
import actions from "../../redux/actions/action";
import Complain from "./Complain/Complain";

const Users = ({users,value,inputValue,inputModal,submitModal,search,modal,showModal,toggleModal}) => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(actions.getUsers())
    },[])
    return (
        <main className={styles.content}>
            <div className={styles.content_search}>
                <input value={value} onChange={e=>inputValue(e.target.value)} className={styles.content_search_input} type="text" placeholder='Кого ищем?'/>
                <button onClick={search} className={styles.content_search_button}>
                    <svg className={styles.content_search_button_svg} >
                        <use xlinkHref={`${icons}#search`}/>
                    </svg>
                </button>
            </div>
            <ul className={styles.content_users}>
                {
                    users.map(user=>
                        <li key={user.id} className={styles.content_users_el}>
                            <User toggleModal={toggleModal} id={user.id} name={user.name}/></li>
                    )
                }

            </ul>
            {showModal?<Complain inputComplain={inputModal} submitComplain={submitModal} toggleModal={toggleModal} modal={modal}/>:null}
        </main>
    );
};

export default Users;