import React,  { KeyboardEvent} from 'react';
import {useParams} from 'react-router-dom';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type DialogsPropsType={
    state:DialogsPageType
}

const Dialogs = (props:DialogsPropsType) => {

const id=useParams()
    console.log(id['*'])

let dialogsElements =props.state.dialogs.map((d)=>(
    <DialogItem name={d.name} id={d.id}/>
))
let messagesElements = props.state.messages.map((m)=>(
    <Message message={m.message} id={m.id}/>
))

    let newMessageElement=React.createRef<HTMLTextAreaElement>()

    let addMessage = () => {
        let text = newMessageElement.current?.value
        alert(text)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addMessage();
        }
    }
    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               {dialogsElements}
           </div>
            <div>
                <textarea ref ={newMessageElement}
                          onKeyPress={onKeyPressHandler}/>
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;