import React from "react";
// import { StateType } from "../../redux/redux-store";
// import { Settings } from "./Settings";
// import { compose } from "redux";
// import { connect } from 'react-redux';
//
//
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";
// import {UpdateRequestType} from "../../api/profileApi";
//
// export type ProfilePropsType = {
//     aboutMe: string;
//     contacts: ProfileContactsType;
//     lookingForAJob: boolean;
//     lookingForAJobDescription: string;
//     fullName: string;
//     userId: number;
//     photos: ProfilePhotosType;
// };
//
// class SettingsContainer extends React.Component<SettingsPropsType, mapStateToPropsType> {
//
//     profile = {
//         fullName: this.props.profile.fullName,
//         aboutMe: this.props.profile.aboutMe,
//         lookingForAJob: this.props.profile.lookingForAJob,
//         lookingForAJobDescription: this.props.profile.lookingForAJobDescription,
//         contacts: {
//             facebook: this.props.profile.contacts.facebook,
//             twitter: this.props.profile.contacts.twitter,
//             github: this.props.profile.contacts.github,
//             youtube: this.props.profile.contacts.youtube,
//         },
//     }
//
//     // componentDidMount(): void {
//     // 	this.props.getProfile(this.props.userId);
//     // }
//
//     render(): React.ReactNode {
//         return <Settings
//             userId={this.props.userId}
//             updateHandler={this.props.updateProfile}
//             getProfile={this.props.getProfile}
//             profile={this.profile} />
//     }
// }
//
// type mapStateToPropsType = {
//     profile: ProfilePropsType,
//     userId: number
// }
//
// type mapDispatchToPropsType = {
//     getProfile: (userId: number) => void
//     updateProfile: (data: UpdateRequestType) => void
// }
//
// // Props connect
// const mapStateToProps = (state: StateType): mapStateToPropsType => {
//     return {
//         profile: state.profilePage.profile,
//         userId: state.auth.userId,
//     }
// }
//
// const mapDispatchToProps: mapDispatchToPropsType = {
//     getProfile, updateProfile
// };
//
// export type SettingsPropsType = mapDispatchToPropsType & mapStateToPropsType;
// export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(SettingsContainer);
