import React from "react";

import {FilterType, UserType} from "../../redux/users-reducer";
import {UsersSearchForm} from "./UsersSearchForm";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type UserPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (page: number) => void
    onFilterChanged: (filter: FilterType) => void

}

export let Users = (props: UserPropsType) => {
    return <div>
        <UsersSearchForm onFilterChanged={props.onFilterChanged}/>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                   totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
        <div>
            {props.users.map(user => <User
                user={user}
                followingInProgress={props.followingInProgress}
                follow={props.follow} unfollow={props.unfollow}
                key={user.id}/>)
            }
        </div>
    </div>
}
