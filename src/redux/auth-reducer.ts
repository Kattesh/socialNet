import {ThunkType} from "./redux-store";
import {authAPI, ResultCodes} from "../api/api";


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: true,
    captchaUrl:null as string|null,//if null, then captcha is not required
}
export type InitialAuthStateType = typeof initialState
type setAuthUserDataType = ReturnType<typeof setAuthUserData>

export const authReducer = (state: InitialAuthStateType = initialState, action: setAuthUserDataType): InitialAuthStateType => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}
export const setAuthUserData = (payload: InitialAuthStateType) => ({type: 'SET_USER_DATA', payload} as const)
export const getAuthUserDataTC = (): ThunkType => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === ResultCodes.success) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData({userId: id, email, login, isAuth: true, captchaUrl: null}))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe, captcha)
        .then(response => {
            if (response.resultCode=== ResultCodes.success) {
                dispatch(getAuthUserDataTC())
                // }else{
                //     if(response.resultCode===ResultCodes.CaptchaIsRequired){
                //         dispatch(getCaptchaUrl())
                //     }}
            }
        })
}
export const logout= ()  =>(dispatch:any) =>{
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === ResultCodes.success) {
                dispatch(setAuthUserData({userId: null, email: null, login:null, isAuth: false, captchaUrl: null}))
            }
        })
}
export default authReducer

// export const login =(email:string, password:string, rememberMe:boolean, captcha:string)=>async(dispatch:any)=>{
//     let data=await authAPI.login(email, password, rememberMe, captcha)
//     if(data.resultCode===ResultCodes.success){
//         dispatch(getAuthUserDataTC())
//     }else{
//         if(data.resultCode===ResultCodes.CaptchaIsRequired){
//             dispatch(getCaptchaUrl())
//         }
//     }
// }