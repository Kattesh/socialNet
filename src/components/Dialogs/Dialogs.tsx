import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageInitialStateType} from "../../redux/dialogs-reducer";
import {useNavigate} from "react-router-dom";
import {Form, Field} from 'react-final-form'
import {Textarea} from "../common/FormControls/FormsControl";
import {composeValidators, maxLengthCreator, required} from "../../utils/validators/validators";

type DialogsPropsType = AddMessageType & {
    dialogsPage: DialogsPageInitialStateType
    isAuth: boolean
}
type AddMessageType = {
    sendMessage: (newMessageBody: string) => void
}

const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map((d) => (
        <DialogItem name={d.name} key={d.id} id={d.id}/>
    ))
    let messagesElements = state.messages.map((m) => (
        <Message message={m.message} key={m.id} id={m.id}/>
    ))
    const navigate = useNavigate()
    if (!props.isAuth) navigate("/login")
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>
                <div> {messagesElements}</div>
                <AddMessageForm sendMessage={props.sendMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props: AddMessageType) => {
    let addNewMessage = (values: { newMessageBody: string }) => {
        props.sendMessage(values.newMessageBody)
    }
    return (
        <Form onSubmit={addNewMessage}>
            {({handleSubmit, pristine, form, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="newMessageBody" validate={composeValidators(required, maxLengthCreator(30))}
                               component={Textarea} placeholder="Enter your message"/>
                    </div>
                    <div>
                        <button>Send</button>
                    </div>
                </form>
            )}
        </Form>
    )
}
export default Dialogs;
