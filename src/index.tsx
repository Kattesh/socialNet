import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {PostType} from "./components/Profile/MyPosts/Post/Post";
import {DialogType, MessageType} from "./components/Dialogs/Dialogs";

let posts: PostType[] = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'it\'s my first post', likesCount: 23},
    {id: 3, message: 'it\'s my second post', likesCount: 323}
]
let dialogs: DialogType[] = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Anna'},
    {id: 3, name: 'Marta'},
    {id: 4, name: 'Samara'}
]
let messages: MessageType[] = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you doing'},
    {id: 3, message: 'Goodbye'},
    {id: 4, message: 'Goodbye'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}
         dialogs={dialogs}
         messages={messages}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
