import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {InitialAuthStateType, setAuthUserData} from "../../redux/auth-reducer";

type Props = {

}

type MSTP = {
    isAuth: boolean
    login: string | null
}
type MDTP = {
    setAuthUserData: (data:InitialAuthStateType) => void
}

class HeaderContainer extends React.Component<MSTP & MDTP, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})
            .then(response => {
                if(response.data.resultCode===0){
                    let {id, login, email}=response.data.data;
                   this.props.setAuthUserData({userId: id, email, login,isAuth:  true})
                }
            })
    }
    render(){

        return <Header {...this.props}/>
    }

}
const mapStateToProps=(state:StateType): MSTP =>({
    isAuth:state.auth.isAuth,
    login:state.auth.login,
})
export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);