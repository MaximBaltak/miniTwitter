import './App.scss';
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import SignIn from "./components/SignIn/SignIn";
import {Navigate, Route, Routes} from "react-router-dom";
import Content from "./components/Content/Content";
import {useSelector} from "react-redux";

function App() {
    let auth = useSelector(state => state.profilePage.auth)
    return (
        <>
            <Header/>
            <Routes>
                <Route exact path='/' element={<SignIn/>}/>
                <Route path='*' element={<NotFound/>}/>
                <Route path='/network/*' element={auth ? <Content/> : <Navigate to='/'/>}/>
                <Route path='/network' element={<Navigate to='/network/*'/>}/>
            </Routes>
        </>
    );
}

export default App;
