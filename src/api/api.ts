import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '993ffe3a-344e-44b1-af2f-5e5666b46b51'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, term: string = '', friend: null | boolean = null) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return profileAPI.getProfile(userId)
    }
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    }
}

export enum ResultCodes {
    success,
    error,
    CaptchaIsRequired = 10
}
export type ResponseType<D = {}> = {
    resultCode: ResultCodes
    messages: Array<string>
    data: D
}
type MeResponseDataType = {
    id: number
    email: string
    login: string
}
type LoginResponseType = {
    userId: number
}
export const authAPI = {
    me() {
        return instance.get<ResponseType<MeResponseDataType>>(`auth/me`)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<ResponseType<LoginResponseType>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}