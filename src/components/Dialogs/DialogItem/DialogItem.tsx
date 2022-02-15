import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogType} from "../Dialogs";

const DialogItem = (props:DialogType) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog +' '+ s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem