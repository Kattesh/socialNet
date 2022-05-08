
type ActionsTypes = ReturnType<typeof sendMessageCreator>

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
        ],
    }


export const dialogsReducer = (state:DialogsPageInitialStateType = initialState, action: ActionsTypes):DialogsPageInitialStateType => {
    switch (action.type) {

        case 'SEND-MESSAGE':
            return {...state, messages: [...state.messages, {id: Date.now(), message: action.newMessageBody}]}

        default:
            return state
    }
}
export const sendMessageCreator = (newMessageBody:string) => ({type: 'SEND-MESSAGE', newMessageBody} as const)
