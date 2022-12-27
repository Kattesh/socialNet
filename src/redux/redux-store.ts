import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {addPostAC, profileReducer, setStatus, setUserProfileAC} from "./profile-reducer";
import {dialogsReducer, sendMessageCreator} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import authReducer, {setAuthUserData} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {appReducer} from "./app-reducer";

export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof sendMessageCreator> |
    ReturnType<typeof setUserProfileAC> |
    ReturnType<typeof setAuthUserData> |
    ReturnType<typeof setStatus>

export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, StateType, unknown, ActionsTypes>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

export type StateType = ReturnType<typeof rootReducer>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)
));
//подключили redux extension chrome


//@ts-ignore
window.__store__= store;
export default store;
