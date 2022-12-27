import React, {Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes} from "react-router-dom";
import  {UsersPage} from "./components/users/UsersContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {StateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

const App = () => {

    // componentDidMount() {
    //     this.props.initializeApp()
    // }
    // render(){
    // if(!props.initialized){
    //     return <Preloader/>
// }
    return (

            <div className='app'>
                <HeaderContainer/>
                <div className='wrapper'>
                    <Routes>
                        <Route path='/' element={<ProfileContainer />} />
                        <Route path='/dialogs/*' element={
                           <Suspense fallback={<Preloader/>} > <DialogsContainer/></Suspense>
                           }/>
                        <Route path='/profile/*' element={
                            <Suspense fallback={<Preloader/>} > <ProfileContainer/></Suspense>
                            }/>
                        <Route path='/profile/:id' element={<ProfileContainer/>}/>
                        <Route path='/users' element={<UsersPage pageTitle={'Samurai'}/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='*' element={<div>404 not found</div>}/>

                        {/*<Route path='/news' element={<News/>}/>*/}
                        {/*<Route path='/music' element={<Music/>}/>*/}
                        {/*<Route path='/settings' element={<Settings/>}/>*/}
                        {/*<Route path='/settings' element={<SettingsContainer />} />*/}
                    </Routes>

                </div>
            </div>

    )
}

// const mapStateToProps=(state:StateType)=>({
//     initialized: state.app.initialized
// })


export default App;
// export default compose(
// withRouter,
// connect(mapStateToProps,{initializeApp})( App);

// Route exact path, чтобы отображался только/dialogs без /dialogs/sveta/1/yyy
