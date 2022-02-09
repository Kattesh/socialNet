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

const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>

               <DialogItem name="Dima" id={1}/>
               <DialogItem name="Anna" id={2}/>
               <DialogItem name="Marta" id={3}/>
               <DialogItem name="Sveta" id={4}/>


           </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you doing"/>
                <Message message="Goodbye"/>
                <Message message="Goodbye"/>
            </div>
        </div>
    )
}

export default Dialogs;