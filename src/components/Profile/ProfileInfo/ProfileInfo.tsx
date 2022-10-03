import React, {ChangeEvent, FC, useState} from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileInfoPropsType} from "../Profile";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/user.jpeg";
import {ProfileType} from "../../../redux/profile-reducer";
import {ContactsType} from "../../../api/api";

type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    enableEditMode: () => void
}

const Contact: FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>{contactTitle}:{contactValue}</div>
}

const ProfileData: FC<ProfileDataPropsType> = ({profile, isOwner, enableEditMode}) => {
    const contactsList = Object.keys(profile.contacts).map(key => {
        const contactValue = profile.contacts[key as keyof ContactsType]
        return <Contact key={key} contactTitle={key} contactValue={contactValue}/>;
    })

    return <div>
        <h3>Profile info:</h3>
        <div><b>Name</b>: {profile.fullName}</div>
        {profile.aboutMe && <p><b>About me</b>: {profile.aboutMe}</p>}
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>}

        <div>
            <p><b>Contacts</b>:</p>
            {contactsList}
        </div>
        {isOwner &&
            <div>
                <button onClick={enableEditMode}>Edit</button>
            </div>
        }
    </div>

}

export const ProfileInfo: FC<ProfileInfoPropsType> = (
    {isOwner, profile, status, updateStatus, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    if (!profile) {
        return <Preloader/>
    }

    const changeProfileAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files && e.currentTarget.files.length) {
            savePhoto(e.currentTarget.files[0]);
        }
    }
    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>{profile.fullName}</div>
                <img src={profile.photos.large || userPhoto} alt={'avatar'} className={s.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={changeProfileAvatar}/>}

                {editMode ? <ProfileDataForm initialValues={profile}
                                             onSubmit={onSubmit}
                                             profile={profile}/> :
                    <ProfileData profile={profile}
                                 isOwner={isOwner}
                                 enableEditMode={() => setEditMode(true)}/>}
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )

}

const ProfileDataForm = ({profile}: any) => {
    return <div>
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>}
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts > [key]}/>
        })}
        </div>
    </div>

}



