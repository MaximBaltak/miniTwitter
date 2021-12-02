import React from 'react';
import './../../App.scss'
import Nav from "../Nav/Nav";
import {Route, Routes} from "react-router-dom";
import AllPosts from "../AllPosts/AllPosts";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
const Content = () => {
    return (
        <div className='grid'>
        <div className='grid_nav'>
        <Nav/>
        </div>
        <div className='grid_content'>
            <Routes>
                <Route exact path='/:id' element={<ProfileContainer/>}/>
                <Route exact path='/users' element={<UsersContainer/>}/>
                <Route exact path='/posts' element={<AllPosts/>}/>
            </Routes>
        </div>
    </div>
    );
};

export default Content;