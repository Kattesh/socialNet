import React from 'react';
import {
    DialogsPageInitialStateType,
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes, StateType} from "../../redux/redux-store";

type MapStatePropsType = {
   dialogsPage: DialogsPageInitialStateType
}

type MapDispatchPropsType = {
    updateNewMessageBody: (body:string)=>void
    sendMessage: ()=>void
}
let mapStateToProps = (state:StateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch:(action: ActionsTypes) => void) :MapDispatchPropsType=> {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
