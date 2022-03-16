import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ActionsTypes, PostType, RootStateType, StoreType} from "./redux/state";

export type PostsType = {
    posts: PostType[]
}

export type AppPropsType={
    state:RootStateType
    dispatch:(action:ActionsTypes) => void
    store: StoreType

}

function App(props: AppPropsType) {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header />
              <Navbar />
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path='/dialogs/*' element={<Dialogs store={props.store} />}/>
                      <Route path='/profile' element={<Profile
                          profilePage={props.state.profilePage}
                          dispatch={props.dispatch}
                      />}/>
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