export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType ={
    name: string
    id: number
}
export type MessageType ={
    id:number
    message:string
}
export type DialogsPageType={
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageBody:string
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText:string
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: {
        posts: PostType[]
        newPostText: string
    }
    dialogsPage: {
        dialogs: DialogType[]
        messages: MessageType[]
        newMessageBody:string
    }
    sidebar: SidebarType
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: (_state: RootStateType) => void
    getState: () => RootStateType
    subscribe: (observer: (state: RootStateType) => void) => void
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof updateNewMessageBodyCreator> |
    ReturnType<typeof sendMessageCreator>

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
export const SEND_MESSAGE = 'SEND-MESSAGE'


const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'it\'s my first post', likesCount: 23},
                {id: 3, message: 'it\'s my second post', likesCount: 323},
                {id: 4, message: 'it\'s my third post', likesCount: 7},
            ],
            newPostText: 'new post'
        },
        dialogsPage: {
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
        },
        sidebar: {},
    },
    _callSubscriber(_state: RootStateType) {
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    // addPost(postMessage: string) {
    //     let newPost: PostType = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber(this._state)
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber(this._state)
    // },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._callSubscriber(this._state)

        }
    }
}
export const addPostActionCreator=()=>({type: ADD_POST} as const)
export const updateNewPostTextActionCreator=(text:string)=> ({type:UPDATE_NEW_POST_TEXT, newText: text} as const)
export const sendMessageCreator=()=>({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyCreator=(body:string)=> ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)

export default store;
// window.store = store;