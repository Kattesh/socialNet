import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpeg";
import {NavLink} from "react-router-dom";
import {FilterType, UserType} from "../../redux/users-reducer";
import {UsersSearchForm} from "./UsersSearchForm";


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
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void


}

export let Users = (props: UserPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <UsersSearchForm onFilterChanged={props.onFilterChanged}/>
        <div className={styles.pages}>
            {pages.map(p => {
                return <span key={p} className={props.currentPage === p ? styles.selectedPage : ''} onClick={(e) => {
                    props.onPageChanged(p)
                }}>{p},</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                             <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}
                                  alt={'photo'}/>
                        </NavLink>

                    </div>
                    <div>
                        {u.followed ?
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }}>
                                Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                            }}>
                                Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                         <div>{'u.location.country'}</div>
                         <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
        <div className={styles.pages}>
            {pages.map(p => {
                return <span key={p} className={props.currentPage === p ? styles.selectedPage : ''} onClick={(e) => {
                    props.onPageChanged(p)
                }}>{p},</span>
            })}

        </div>
    </div>
}

