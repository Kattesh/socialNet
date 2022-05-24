import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpeg";
import {NavLink} from "react-router-dom";
import { UserType} from "../../redux/users-reducer";


type UserPropsType = {
    user: UserType
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export let User = (props: UserPropsType) => {
    return <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                             <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto}
                                  alt={'photo'}/>
                        </NavLink>

                    </div>
                    <div>
                        {user.followed ?
                            <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                props.unfollow(user.id)
                            }}>
                                Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                props.follow(user.id)
                            }}>
                                Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                         <div>{'user.location.country'}</div>
                         <div>{'user.location.city'}</div>
                    </span>
                </span>
            </div>
}

