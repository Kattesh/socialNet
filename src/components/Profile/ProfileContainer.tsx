import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {StateType, ThunkType} from "../../redux/redux-store";
import {getStatus, getUserProfileTC, ProfileType, updateStatus} from "../../redux/profile-reducer";
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
    // setUserProfileAC: (profile: ProfileType) => void
    getUserProfileTC(userId: number): ThunkType
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}
type WithRouterType = Location & NavigateFunction & Readonly<Params>

class ProfileContainer extends React.Component<MapStatePropsType & MapDispatchPropsType & { router: any }, any> {
    componentDidMount() {
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

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile!}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
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
    connect(mapStateToProps, {getUserProfileTC, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)






