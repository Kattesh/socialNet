import { useNavigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {StateType} from "../redux/redux-store";


type MapStatePropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: React.FC<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props
        //если не залогинен, то на страницу логина перебрасывает
        const navigate = useNavigate()
        if (!props.isAuth) navigate("/login")
        return <Component {...restProps as T}/>
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}