import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const setActive = (nav: { isActive: boolean }) => (nav.isActive ? s.active : s.link)

const Navbar = () => {
    return (
        <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile"  className= {setActive}>
                <FontAwesomeIcon icon={faHome as IconProp} />Profile
            </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" className={setActive}>
                <FontAwesomeIcon icon={faEnvelope as IconProp} />Messages
            </NavLink>
        </div>
            <div className={s.item}>
                <NavLink to="/users" className={setActive}>
                    <FontAwesomeIcon icon={faUsers as IconProp} />Users
                </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" className={setActive}>
                <FontAwesomeIcon icon={faUserCog as IconProp} />Settings
            </NavLink>
        </div>
    </nav>
    )
}

export default Navbar;
