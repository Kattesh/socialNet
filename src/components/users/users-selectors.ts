import {StateType} from "../../redux/redux-store";

export const getTotalUsersCount = (state: StateType) => {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state: StateType) => {
    return state.usersPage.currentPage;
}
export const getIsFetching = (state: StateType) => {
    return state.usersPage.isFetching;
}
export const getFollowingInProgress = (state: StateType) => {
    return state.usersPage.followingInProgress;
}
export const getUsersFilter = (state: StateType) => {
    return state.usersPage.filter;
}