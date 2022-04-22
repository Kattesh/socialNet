import React from 'react';
import s from  './Header.module.css';
import {NavLink} from "react-router-dom";
import {InitialAuthStateType} from "../../redux/auth-reducer";

type Props = {
    isAuth:boolean
    login:string | null
}

const Header = (props:Props) => {
    return <header className={s.header}>
        <img src='https://1000logos.net/wp-content/uploads/2016/11/meta-logo.png' />
        <div className={s.loginBlock}>
            {props.isAuth? props.login :
            <NavLink to="/login">Login</NavLink>}
        </div>
    </header>
}

export default Header;