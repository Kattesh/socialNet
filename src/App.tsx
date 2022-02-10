import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";



function App() {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header />
              <Navbar />
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path='/dialogs' element={<Dialogs id={0} name={''}/>} />
                      <Route path='/profile' element={<Profile/>}/>
                      {/*<Route path='/news' component={News}/>*/}
                      {/*<Route path='/music' component={Music}/>*/}
                      {/*<Route path='/settings' component={Settings}/>*/}
                  </Routes>

              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;

// Route exact path, чтобы отображался только/dialogs без /dialogs/sveta/1/yyy