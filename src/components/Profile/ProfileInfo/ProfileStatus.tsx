import React, {useState} from "react";
import s from './ProfileInfo.module.css';

type ProfileStatusType = {
    status: string
}

const ProfileStatus = (props: ProfileStatusType) => {
    let [editMode, setEditMode] = useState(false);
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>}
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} value={props.status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatus