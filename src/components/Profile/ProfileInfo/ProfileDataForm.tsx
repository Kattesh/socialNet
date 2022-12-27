import {Field, Form, Formik, FormikHelpers} from 'formik';
import React from 'react';
import {ProfileType} from "../../../redux/profile-reducer";


type InitialValuesType = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: {
        facebook: string
        github: string
        instagram: string
        mainLink: string
        twitter: string
        vk: string
        website: string
        youtube: string
    }
}

type ProfileDataFormPropsType = {
    profile: ProfileType
    saveProfileInfo: (profileInfo: any, setStatus: (status?: any) => void) => void
    toggleEditMode: (value: boolean) => void
}

export const ProfileDataForm: React.FC<ProfileDataFormPropsType> = ({
                                                                        profile,
                                                                        saveProfileInfo,
                                                                        toggleEditMode
                                                                    }) => {

    const initialValues: InitialValuesType = {
        fullName: profile.fullName,
        aboutMe: profile.aboutMe,
        lookingForAJob: profile.lookingForAJob,
        lookingForAJobDescription: profile.lookingForAJobDescription,
        contacts: {
            github: profile.contacts.github ? profile.contacts.github : '',
            facebook: profile.contacts.facebook ? profile.contacts.facebook : '',
            instagram: profile.contacts.instagram ? profile.contacts.instagram : '',
            twitter: profile.contacts.twitter ? profile.contacts.twitter : '',
            vk: profile.contacts.vk ? profile.contacts.vk : '',
            mainLink: profile.contacts.mainLink ? profile.contacts.mainLink : '',
            youtube: profile.contacts.youtube ? profile.contacts.youtube : '',
            website: profile.contacts.website ? profile.contacts.website : '',
        }
    }

    const onSubmit = (
        values: InitialValuesType,
        {setStatus, setSubmitting}: FormikHelpers<InitialValuesType>
    ) => {
        //todo ignore
        //@ts-ignore
        saveProfileInfo(values, setStatus).then(() => {
            setSubmitting(false)
            toggleEditMode(false)
        })
    }

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {(formikProps) => (
                    <Form>
                        <div>
                            <label htmlFor={'fullName'}>Full name:
                                <Field name={'fullName'} id={'fullName'}/>
                            </label>
                        </div>
                        <div>
                            <label htmlFor={'aboutMe'}>About me:
                                <Field name={'aboutMe'} id={'aboutMe'}/>
                            </label>
                        </div>
                        <div>
                            <label htmlFor={'lookingForAJob'}>Looking for a job:
                                <Field type={'checkbox'} name={'lookingForAJob'}
                                       id={'lookingForAJob'}/>
                            </label>
                        </div>
                        <div>
                            <label htmlFor={'lookingForAJobDescription'}>Description:
                                <Field name={'lookingForAJobDescription'}
                                       id={'lookingForAJobDescription'}/>
                            </label>
                        </div>

                        <div>
                            Contacts:
                            <div style={{paddingLeft: 15}}>
                                {
                                    Object.keys(profile.contacts).map(key => {
                                        return (
                                            <div key={key}>
                                                <label htmlFor={key}>{key}:
                                                    <Field name={'contacts.' + key}
                                                           id={key}/>
                                                </label>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <button type={'submit'}>Save</button>
                        {formikProps.status ? formikProps.status : null}
                    </Form>
                )}
            </Formik>
        </div>
    )
}

