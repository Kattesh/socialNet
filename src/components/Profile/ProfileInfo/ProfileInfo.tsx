import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import profile from "../../../assets/images/profile.jpg";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props: ProfilePropsType) => {
    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img src={profile} alt="profile"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <div>{props.profile.fullName}</div>
                <img src={props.profile.photos.large} alt={'photo'}/>
                <ProfileStatus status={'Hello my friends'}/>
            </div>
        </div>
    )
}

export default ProfileInfo