import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {StateType, ThunkType} from "../../redux/redux-store";
import {getAuthUserDataTC} from "../../redux/auth-reducer";


type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    // setAuthUserData: (data: InitialAuthStateType) => void
    getAuthUserDataTC(): ThunkType
}
type PropsType = MapDispatchPropsType & MapStatePropsType

class HeaderContainer extends React.Component<PropsType, any> {
    componentDidMount() {
        this.props.getAuthUserDataTC()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: StateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect(mapStateToProps, {getAuthUserDataTC})(HeaderContainer);

