import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

type DialogType ={
    name: string
    id: number
}

const DialogItem = (props:DialogType) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog +' '+ s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
type MessageType ={
    message:string
}
const Message = (props:MessageType) =>{
   return (
       <div className={s.message}>{props.message}</div>
   )
}

const Dialogs = (props: DialogType) => {


    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Marta'},
        {id: 4, name: 'Sveta'}
    ]
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you doing'},
        {id: 3, message: 'Goodbye'},
        {id: 4, message: 'Goodbye'}
    ]



    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>

               <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
               <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>



           </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[0].message}/>


            </div>
        </div>
    )
}

export default Dialogs;