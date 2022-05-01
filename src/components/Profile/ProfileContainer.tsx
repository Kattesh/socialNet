import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {StateType, ThunkType} from "../../redux/redux-store";
import {getUserProfileTC, ProfileType} from "../../redux/profile-reducer";
import {Location, NavigateFunction, Params, useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    // setUserProfileAC: (profile: ProfileType) => void
    getUserProfileTC(userId: number): ThunkType
}
type WithRouterType = Location & NavigateFunction & Readonly<Params<string>>

class ProfileContainer extends React.Component<MapStatePropsType & MapDispatchPropsType & { router: WithRouterType }, any> {
    componentDidMount() {
        // const url = window.location.href;
        // const userId = url.split('/').splice(-1)[0];

        // @ts-ignore
        let {userId} = this.props.router.params
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfileTC(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile!}/>
            </div>
        )
    }
}


let mapStateToProps = (state: StateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
})
function withRouter<T>(Container: ComponentType<T>) {
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
    connect(mapStateToProps, {getUserProfileTC}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)






