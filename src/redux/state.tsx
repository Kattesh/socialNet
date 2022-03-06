import {rerenderEntireTree} from "../render";

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
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText:string
}
export type SidebarType={
}
export type RootStateType={
    profilePage:{
        posts: PostType[]
        newPostText:string
    }
    dialogsPage:{
        dialogs: DialogType[]
        messages: MessageType[]
    }
    sidebar: SidebarType
}

let state:RootStateType={
    profilePage:{
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'it\'s my first post', likesCount: 23},
            {id: 3, message: 'it\'s my second post', likesCount: 323},
            {id: 4, message: 'it\'s my third post', likesCount: 7},
        ],
        newPostText: ''
    },
    dialogsPage:{
        dialogs:[
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Anna'},
            {id: 3, name: 'Marta'},
            {id: 4, name: 'Samara'}
        ],
        messages:[
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you doing'},
            {id: 3, message: 'Goodbye'},
            {id: 4, message: 'Goodbye'}
        ],
    },
    sidebar:{},
    }

export let addPost = (postMessage: string) => {
    let newPost:PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}


export default state;