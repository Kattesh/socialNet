import React, {MouseEventHandler} from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


type InitialAuthStateType = {
    isAuth: boolean
    login: string | null
    logout:()=>void
}

const Header = (props: InitialAuthStateType) => {
    return <header className={s.header}>
        <img src='https://1000logos.net/wp-content/uploads/2016/11/meta-logo.png' alt={'logo'}/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to="/login">Login</NavLink>}
        </div>
    </header>
}

export default Header;