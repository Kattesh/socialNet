import React from "react";
import {connect} from "react-redux";
import {
    FilterType,
    follow,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    UserType,
} from "../../redux/users-reducer";
import {StateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "./users-selectors";


type  MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    filter:FilterType
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    getUsers: (pageNumber: number, pageSize: number, filter:FilterType) => void
}
export type UsersPropsType = MapDispatchPropsType & MapStatePropsType

export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        const {currentPage,pageSize,filter}=this.props
        this.props.getUsers(currentPage, pageSize, filter)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize,filter}=this.props
        this.props.getUsers(pageNumber, pageSize, filter)
    }

    onFilterChanged=(filter:FilterType)=>{
        const {pageSize}=this.props
        this.props.getUsers(1, pageSize, filter)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   onFilterChanged={this.onFilterChanged}
                   followingInProgress={this.props.followingInProgress}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching:getIsFetching(state),
        followingInProgress:getFollowingInProgress(state),
        filter:getUsersFilter(state)
    }
}

//передаем объект mapDispatchToProps
export default compose<React.ComponentType>(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers}),
    // withAuthRedirect
)(UsersContainer)
//connect автоматически создал  callback follow после вызова AC follow

