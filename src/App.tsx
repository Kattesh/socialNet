import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='/profile' element={<ProfileContainer/>}/>
                        <Route path='/profile/:id' element={<ProfileContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<Login/>}/>

                        {/*<Route path='/news' element={<News/>}/>*/}
                        {/*<Route path='/music' element={<Music/>}/>*/}
                        {/*<Route path='/settings' element={<Settings/>}/>*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

// Route exact path, чтобы отображался только/dialogs без /dialogs/sveta/1/yyy