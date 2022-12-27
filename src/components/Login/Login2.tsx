//
import { FormikValues } from "formik";
// import { connect } from "react-redux";
// import { Navigate } from "react-router-dom";
// import {LoginForm} from "../Forms/LoginForm";
// import {StateType} from "../../redux/redux-store";
//
//
// export type LoginPropsType = {
//     login: string
//     password: string
//     remember: boolean
//     captcha: string
// }
//
// const Login2 = (props: (mapStateToPropsType & mapDispatchToPropsType)) => {
//     if (props.isAuth) {
//         return <Navigate to={'/profile'} />
//     }
//
//     return <LoginForm onSubmit={props.login} captcha={props.captcha} />
// }
//
// type mapDispatchToPropsType = {
//     login: (values: LoginPropsType, actions: FormikValues) => void
// }
//
// const mapDispatchToProps = (dispatch: any): mapDispatchToPropsType => {
//     return {
//         login: (values: LoginPropsType, actions: FormikValues) => dispatch(login(values, actions))
//     }
// }
//
// type mapStateToPropsType = {
//     isAuth: boolean
//     captcha: string | null
// }
//
// const mapStateToProps = (state: StateType): mapStateToPropsType => {
//     return {
//         isAuth: state.auth.isAuth,
//         captcha: state.auth.captcha,
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Login2);
