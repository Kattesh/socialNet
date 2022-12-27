import React, {MouseEventHandler} from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Logo from '../../assets/images/logo1.png'

type InitialAuthStateType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header = (props: InitialAuthStateType) => {
    return <header className={s.header}>
        <div className="wrapper header__wrapper">
        <img src={Logo} alt={'logo'}/>
            <Navbar/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div  className={s.login}>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to="/login">Login</NavLink>}
        </div>
        </div>

    </header>
}

export default Header;
