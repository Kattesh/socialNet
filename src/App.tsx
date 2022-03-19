import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { StateType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Dispatch, Store} from "redux";

export type AppPropsType={

}

function App(props: AppPropsType) {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header />
              <Navbar />
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path='/dialogs/*' element={<DialogsContainer  />}/>
                      <Route path='/profile' element={<Profile/>}/>
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