import {ActionsTypes} from "./redux-store";

export type PostType = {
  id: number
  message: string
  likesCount: number
}
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

type InitialStateType = typeof initialState
let initialState = {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'it\'s my first post', likesCount: 23},
        {id: 3, message: 'it\'s my second post', likesCount: 323},
        {id: 4, message: 'it\'s my third post', likesCount: 7},
      ],
      newPostText: 'new post'
    }

export const profileReducer = (state:InitialStateType = initialState, action: ActionsTypes):InitialStateType => {
  switch (action.type) {
    case ADD_POST:{
      let newPost: PostType = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      }
      return {...state, posts: [...state.posts, newPost], newPostText :''}
      }
    case UPDATE_NEW_POST_TEXT:{
      return  {...state,newPostText: action.newText}
      }
    default:
      return state
  }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)