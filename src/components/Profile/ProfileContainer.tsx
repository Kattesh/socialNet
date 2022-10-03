import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {StateType, ThunkType} from "../../redux/redux-store";
import {getStatus, getUserProfileTC, ProfileType, savePhoto, updateStatus} from "../../redux/profile-reducer";
import {Location, NavigateFunction, Params, useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null,
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfileTC: (userId: number) => ThunkType
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
    saveProfile: (profile: ProfileType) => Promise<{}>
}

type WithRouterType = Location & NavigateFunction & Readonly<Params>

class ProfileContainer extends React.Component<MapStatePropsType & MapDispatchPropsType & { router: any }, any> {

    refreshProfile() {
        // const url = window.location.href;
        // const userId = url.split('/').splice(-1)[0];
        // console.log(this.props.router.params.id)
        let id = this.props.router.params.id
        if (!id) {
            id = this.props.authorizedUserId
            // if(!id){
            //     this.props.history.push('/login')
            // }
        }
        this.props.getUserProfileTC(id)
        this.props.getStatus(id)
    }

    componentDidMount() {

        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<MapStatePropsType & MapDispatchPropsType & { router: any }>, prevState: Readonly<any>, snapshot?: any) {
        if (this.props.router.params.id !== prevProps.router.params.id)
            this.refreshProfile()
    }

    render() {
        const {profile, status, updateStatus, savePhoto, saveProfile} = this.props;
        return (
            <Profile {...this.props}
                     isOwner={!this.props.router.params.id}
                     profile={profile!}
                     status={status}
                     updateStatus={updateStatus}
                     savePhoto={savePhoto}
                     saveProfile={saveProfile}

            />
        )
    }
}

let mapStateToProps = (state: StateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

function withRouter<T>(Container: React.FC<T>) {
    function ComponentWithRouterProp(props: T & WithRouterType) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Container
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC, getStatus, updateStatus, savePhoto}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)






