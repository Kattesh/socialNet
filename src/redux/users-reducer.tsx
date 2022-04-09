export type ActionsUsersTypes =
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>|
    ReturnType<typeof setCurrentPageAC>|
    ReturnType<typeof setTotalUsersCountAC>

export type UserType = {
    id: number
    photos: {
        small?: any
        large?: any
    }
    followed: boolean
    name: string
    status: string
    location?: {
        city: string
        country: string
    }
}

export type InitialStateType = {
    users: Array<UserType>
    pageSize:number
    totalUsersCount:number
    currentPage:number

}

let initialState: InitialStateType = {
    users: [] ,
    pageSize:5,
    totalUsersCount:0,
    currentPage: 4

}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsUsersTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        }
        case "SET-USERS": {
            return {...state, users:action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage:action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount:action.totalUsersCount}
        }
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users:Array<UserType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPageAC = (currentPage:number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCountAC = (totalUsersCount:number) => ({type: 'SET-TOTAL-USERS-COUNT',totalUsersCount} as const)