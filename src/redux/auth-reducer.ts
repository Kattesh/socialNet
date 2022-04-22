import {ActionsTypes} from "./redux-store";

const SET_USER_DATA = "SET-USER-DATA"

export type InitialAuthStateType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}
let initialState: InitialAuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: InitialAuthStateType = initialState, action: setAuthUserDataType): InitialAuthStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (data: InitialAuthStateType) => ({type: SET_USER_DATA, data} )
type setAuthUserDataType=  ReturnType<typeof setAuthUserData>
export default authReducer