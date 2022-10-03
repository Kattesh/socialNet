import React from 'react';

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export type ProfileInfoPropsType = {
    profile: ProfileType|null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<{}>
}

const Profile = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         saveProfile={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;
