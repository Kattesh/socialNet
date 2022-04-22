export type ActionsUsersTypes =
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers>|
    ReturnType<typeof setCurrentPage>|
    ReturnType<typeof setTotalUsersCount>|
    ReturnType<typeof toggleIsFetching>


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
    isFetching:boolean
}

let initialState: InitialStateType = {
    users: [] ,
    pageSize:6,
    totalUsersCount:0,
    currentPage: 1,
    isFetching:false
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
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching:action.isFetching}
        }
        default:
            return state
    }
}
//action creators
export const follow = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollow = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users:Array<UserType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage:number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalUsersCount:number) => ({type: 'SET-TOTAL-USERS-COUNT',totalUsersCount} as const)
export const toggleIsFetching = (isFetching:boolean) => ({type: 'TOGGLE-IS-FETCHING',isFetching} as const)