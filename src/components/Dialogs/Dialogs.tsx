import React, {ChangeEvent, KeyboardEvent} from 'react';
import {useParams} from 'react-router-dom';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    DialogsPageType,
    SEND_MESSAGE,
    sendMessageCreator,
    StoreType,
    updateNewMessageBodyCreator
} from "../../redux/state";


type DialogsPropsType = {
    store: StoreType
}

const Dialogs = (props: DialogsPropsType) => {
    let state = props.store.getState().dialogsPage

    const id = useParams()
    console.log(id['*'])

    let dialogsElements = state.dialogs.map((d) => (
        <DialogItem name={d.name} id={d.id}/>
    ))
    let messagesElements = state.messages.map((m) => (
        <Message message={m.message} id={m.id}/>
    ))

    let newMessageBody = state.newMessageBody
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
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
