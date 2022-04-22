import React, {ComponentType} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {ProfileType, setUserProfileAC} from "../../redux/profile-reducer";
import {Location, NavigateFunction, Params, useLocation, useNavigate, useParams} from "react-router-dom";


type MapStatePropsType = {
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    setUserProfileAC: (profile: ProfileType) => void
}
type WithRouterType = Location & NavigateFunction & Readonly<Params<string>>
// type PropsType = MapStatePropsType & MapDispatchPropsType
// function ProfileContainer(props: PropsType) {
//     useEffect(  () => {
//         let userId = props.match.params.userId;
//         if(!userId){
//             userId=2
//         }
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
//             .then (response => {
//                 props.setUserProfile(response.data);
//             });
//     },  [])
//     return (
//         <Profile profile={props.profile}/>
//     );
// }

type Props = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<Props & { router: WithRouterType }, any> {
    componentDidMount() {
        const url = window.location.href;
        // @ts-ignore
        const {userId} = this.props.router.params
        //const userId = url.split('/').splice(-1)[0];
        if (!userId) {

        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfileAC(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile!}/>
        )
    }
}

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

let mapStateToProps = (state: StateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})


const needComponent = connect(mapStateToProps, {setUserProfileAC})(ProfileContainer);

export default withRouter<any>(needComponent)