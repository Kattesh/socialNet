import {profileReducer} from "./profile-reducer";
import {dialogsReducer, sendMessageCreator} from "./dialogs-reducer";
// import {sidebarReducer} from "./sidebar-reducer";
//
// //  type PostType = {
// //     id: number
// //     message: string
// //     likesCount: number
// // }
// type DialogType = {
//     name: string
//     id: number
// }
// type MessageType = {
//     id: number
//     message: string
// }
//  type DialogsPageType = {
//     dialogs: DialogType[]
//     messages: MessageType[]
//     newMessageBody: string
// }
//  type ProfilePageType = {
//     posts: PostType[]
//     newPostText: string
// }
//type SidebarType = {}
//  type RootStateType = {
//     profilePage: {
//         posts: PostType[]
//         newPostText: string
//     }
//     dialogsPage: {
//         dialogs: DialogType[]
//         messages: MessageType[]
//         newMessageBody: string
//     }
//     sidebar: SidebarType
// }
//  type StoreType = {
//     _state: RootStateType
//     _callSubscriber: (_state: RootStateType) => void
//     getState: () => RootStateType
//     subscribe: (observer: (state: RootStateType) => void) => void
//     // addPost: (postMessage: string) => void
//     // updateNewPostText: (newText: string) => void
//     dispatch: (action: ActionsTypes) => void
// }
//
// // type ActionsTypes =
// //     ReturnType<typeof addPostActionCreator> |
// //     ReturnType<typeof updateNewPostTextActionCreator> |
// //     ReturnType<typeof updateNewMessageBodyCreator> |
// //     ReturnType<typeof sendMessageCreator>
//
//
// const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi, how are you?', likesCount: 12},
//                 {id: 2, message: 'it\'s my first post', likesCount: 23},
//                 {id: 3, message: 'it\'s my second post', likesCount: 323},
//                 {id: 4, message: 'it\'s my third post', likesCount: 7},
//             ],
//             newPostText: 'new post'
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Dima'},
//                 {id: 2, name: 'Anna'},
//                 {id: 3, name: 'Marta'},
//                 {id: 4, name: 'Samara'}
//             ],
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'How are you doing'},
//                 {id: 3, message: 'Goodbye'},
//                 {id: 4, message: 'Goodbye'}
//             ],
//             newMessageBody: 'new message'
//         },
//         sidebar: {},
//     },
//     _callSubscriber(_state: RootStateType) {
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//     dispatch(action) {
//         profileReducer(this._state.profilePage, action)
//         dialogsReducer(this._state.dialogsPage, action)
//         sidebarReducer(this._state.sidebar, action)
//
//         this._callSubscriber(this._state)
//     }
// }
//
//
//

// // window.store = store;