import {ThunkType} from "./redux-store";
import {authAPI, ResultCodes} from "../api/api";
import {getAuthUserDataTC} from "./auth-reducer";

let initialState = {
    initialized: false
}
type InitialAuthStateType = typeof initialState
type setAuthUserDataType = ReturnType<typeof InitializedSuccess>

export const appReducer = (state: InitialAuthStateType = initialState, action: setAuthUserDataType): InitialAuthStateType => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS': {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}
export const InitializedSuccess = () => ({type: 'INITIALIZED-SUCCESS'} as const)
// export const initializeApp = (): ThunkType => (dispatch) => {
//     dispatch(getAuthUserDataTC())
//         .then(()=>{
//             dispatch(InitializedSuccess())
//         })



    // authAPI.me()
    //     .then(response => {
    //         if (response.data.resultCode === ResultCodes.success) {
    //             let {id, login, email} = response.data.data;
    //             dispatch(setAuthUserData({userId: id, email, login, isAuth: true, captchaUrl: null}))
    //         }
    //     })
// }

