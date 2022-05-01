import {applyMiddleware, combineReducers, createStore} from "redux";
import {
    addPostActionCreator,
    profileReducer,
    setUserProfileAC,
    updateNewPostTextActionCreator
} from "./profile-reducer";
import {dialogsReducer, sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import authReducer, {setAuthUserData} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof updateNewMessageBodyCreator> |
    ReturnType<typeof sendMessageCreator> |
    ReturnType<typeof setUserProfileAC> |
    ReturnType<typeof setAuthUserData>


export type ThunkType <ReturnType = void> = ThunkAction<ReturnType, StateType, unknown, ActionsTypes>


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer

})

export type StateType = ReturnType<typeof reducers>
let store = createStore(reducers, applyMiddleware(thunk))

export default store;