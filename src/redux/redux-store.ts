import {applyMiddleware, combineReducers, createStore} from "redux";
import {
    addPostAC,
    profileReducer,
    setStatus,
    setUserProfileAC
} from "./profile-reducer";
import {dialogsReducer, sendMessageCreator} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import authReducer, {setAuthUserData} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";


export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof sendMessageCreator> |
    ReturnType<typeof setUserProfileAC> |
    ReturnType<typeof setAuthUserData>|
    ReturnType<typeof setStatus>

export type ThunkType <ReturnType = void> = ThunkAction<ReturnType, StateType, unknown, ActionsTypes>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type StateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer, applyMiddleware(thunk))

export default store;