import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

type DialogType ={
    name: string
    id: number
}

const DialogItem = (props:DialogType) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog+' '+s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>

               <DialogItem name="Dima" id={1}/>

               <div className={s.dialog}>
                   <NavLink to="/dialogs/2">Anna</NavLink>
               </div>
               <div className={s.dialog}>
                   <NavLink to="/dialogs/3">Marta</NavLink>
               </div>
           </div>
            <div className={s.messages}>
                <div className={s.message}>hi</div>
                <div className={s.message}>how are you doing</div>
                <div className={s.message}>Goodbye</div>
            </div>
        </div>
    )
}

export default Dialogs;