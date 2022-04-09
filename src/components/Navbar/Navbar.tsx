import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile"  className= {({ isActive }) => (isActive ? s.activeLink : '')}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" className= {({ isActive }) => (isActive ? s.activeLink : '')}>Messages</NavLink>
        </div>
            <div className={s.item}>
            <NavLink to="/users" className= {({ isActive }) => (isActive ? s.activeLink : '')}>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news">News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music">Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings">Settings</NavLink>
        </div>
    </nav>
    )
}

export default Navbar;