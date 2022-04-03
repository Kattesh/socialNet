import React from "react";
import styles from './Users.module.css'
import { UsersPropsType} from "./UsersContainer";

export let Users = (props:UsersPropsType) => {

    if (props.users.length===0){
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWvWKf4r5TRKhT1miHbgvxL_3Pduc4GQB8OYOQ8mTjgKOlKZHnO4eFgvdoBxusjkEHbLU&usqp=CAU',
                followed: true,
                fullName: 'Elena',
                status: 'I am a developer',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://n1s2.starhit.ru/6f/f5/02/6ff502e9d0291833683b7f54f84f182e/480x497_0_8bb2eb837bd0edcb12d878b3ba760026@480x497_0xc0a8399a_18155624831473165416.jpeg',
                followed: false,
                fullName: 'Olga',
                status: 'I am a secretary',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} alt={'photo'}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                         <div>{u.location.country}</div>
                         <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}