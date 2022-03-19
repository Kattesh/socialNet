import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
export type DialogType = {
    name: string
    id: number
}
const DialogItem = (props:DialogType) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog +' '+ s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem