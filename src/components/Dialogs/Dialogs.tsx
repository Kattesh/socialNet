import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageInitialStateType} from "../../redux/dialogs-reducer";



type DialogsPropsType = {
    dialogsPage: DialogsPageInitialStateType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map((d) => (
        <DialogItem name={d.name} key={d.id} id={d.id}/>
    ))
    let messagesElements = state.messages.map((m) => (
        <Message message={m.message} key={m.id}  id={m.id}/>
    ))
    let newMessageBody = state.newMessageBody
    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements}</div>
                <div>
                    <div>
                      <textarea value={newMessageBody}
                                placeholder='Enter your message'
                                onChange={onNewMessageChange}
                      ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
