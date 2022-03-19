import {ActionsTypes} from "./redux-store";
type InitialStateType = typeof initialState
let initialState = {}

export const sidebarReducer = (state: InitialStateType = initialState, action: ActionsTypes):InitialStateType  => {
    return state
}