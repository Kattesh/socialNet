import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs, {DialogType, MessageType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Post, {PostType} from "./components/Profile/MyPosts/Post/Post";

export type PostsType = {
    posts: PostType[]
}

export type AppPropsType={
    posts: PostType[]
    dialogs: DialogType[]
    messages: MessageType[]
}

function App(props:AppPropsType) {

  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header />
              <Navbar />
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path='/dialogs/*' element={<Dialogs dialogs ={props.dialogs} messages={props.messages}/>} />
                      <Route path='/profile' element={<Profile posts ={props.posts}/>}/>
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