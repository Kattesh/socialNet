import {ActionsTypes} from "./redux-store";


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export type DialogsPageInitialStateType = typeof initialState
let initialState = {
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Anna'},
            {id: 3, name: 'Marta'},
            {id: 4, name: 'Samara'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you doing'},
            {id: 3, message: 'Goodbye'},
            {id: 4, message: 'Goodbye'}
        ],
        newMessageBody: 'new message'
    }

export const dialogsReducer = (state:DialogsPageInitialStateType = initialState, action: ActionsTypes):DialogsPageInitialStateType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.body}

        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {...state, newMessageBody: '', messages: [...state.messages, {id: 6, message: body}]}

        default:
            return state
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)