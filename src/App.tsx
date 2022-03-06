import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { PostType, RootStateType} from "./redux/state";

export type PostsType = {
    posts: PostType[]
}

export type AppPropsType={
    state:RootStateType
    addPost:(postMessage:string)=>void
    updateNewPostText:(newPostElement:string)=>void
}

function App(props:AppPropsType) {

  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header />
              <Navbar />
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path='/dialogs/*' element={<Dialogs state ={props.state.dialogsPage}/>} />
                      <Route path='/profile' element={<Profile profilePage ={props.state.profilePage}
                                                               addPost={props.addPost}
                                                               updateNewPostText={props.updateNewPostText}
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