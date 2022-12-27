
export type UpdateContactsRequestType = {
    facebook: string;
    twitter: string;
    github: string;
    youtube: string;
};

export type UpdateRequestType = {
    fullName: string;
    aboutMe: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    contacts: UpdateContactsRequestType;
};
