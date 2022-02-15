import React from 'react';
import {useParams} from 'react-router-dom';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export type DialogType ={
    name: string
    id: number
}

export type MessageType ={
    message:string
}

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Marta'},
        {id: 4, name: 'Samara'}
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you doing'},
        {id: 3, message: 'Goodbye'},
        {id: 4, message: 'Goodbye'}
    ]
const id=useParams()
    console.log(id['*'])
let dialogsElements = dialogs.map((d)=>(
    <DialogItem name={d.name} id={d.id}/>
))
let messagesElements = messages.map((m)=>(
    <Message message={m.message}/>
))
    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               {dialogsElements}
           </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;