import './App';
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import SignIn from "./components/SignIn/SignIn";
import {Navigate, Route, Routes} from "react-router-dom";
import Content from "./components/Content/Content";
import {useSelector} from "react-redux";
import loader from './img/loader.gif'
function App() {
    let auth = useSelector(state => state.profilePage.auth)
    let load = useSelector(state => state.profilePage.loader)

    return (
        <>
            <Header/>
                    <Routes >
                        <Route exact path='/' element={<SignIn/>}/>
                        <Route path='*' element={<NotFound/>}/>
                        <Route path='/network/*' element={auth ? <Content/> : <Navigate to='/'/>}/>
                        <Route path='/network' element={<Navigate to='/network/*'/>}/>
                    </Routes>

            {load?<div className='container-loader'>
                <img className='container-loader_loader' src={loader} alt="загрузка..."/>
            </div>:null}
            <div className='element '/>
            <div className='element twoElement'/>
            <div className='element threeElement'/>
            <div className='element fourElement'/>
            <div className='element fiveElement'/>
            <div className='element sixElement'/>
            <div className='element sevenElement'/>
        </>
    );
}

export default App;
