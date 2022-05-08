import {ThunkType} from "./redux-store";
import {profileAPI, usersAPI} from "../api/api";


export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string
        large: string
    }
}

type InitialStateType = typeof initialState
let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'it\'s my first post', likesCount: 23},
        {id: 3, message: 'it\'s my second post', likesCount: 323},
        {id: 4, message: 'it\'s my third post', likesCount: 7},
    ],
    profile: {
        aboutMe: 'aboutMe',
        contacts: {
            facebook: 'facebook',
            website: 'website',
            vk: 'vk',
            twitter: 'twitter',
            instagram: 'instagram',
            youtube: 'youtube',
            github: 'github',
            mainLink: 'mainLink'
        },
        lookingForAJob: false,
        lookingForAJobDescription: 'lookingForAJobDescription',
        fullName: 'fullName',
        userId: 0,
        photos: {
            small: 'string',
            large: 'string'

        }
    },
    status: "",
    newPostText: ""
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost: PostType = {
                id: Date.now(),
                message: action.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost]}
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET_STATUS': {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

export const addPostAC = (newPostText:string) => ({type: 'ADD-POST', newPostText} as const)
export const setUserProfileAC = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setStatus = (status: string) => ({type: 'SET_STATUS', status} as const)
export const getUserProfileTC = (userId: number): ThunkType => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data))
        })
}
export const getStatus = (userId: number): ThunkType => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status: string): ThunkType => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {

        })
}
export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof setUserProfileAC> |
    ReturnType<typeof setStatus>
