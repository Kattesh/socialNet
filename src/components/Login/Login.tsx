import React from "react";
import {Form, Field} from 'react-final-form'
import {Input} from "../common/FormControls/FormsControl";
import {composeValidators, maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {useNavigate} from "react-router-dom";
import {StateType} from "../../redux/redux-store";
import style from '../common/FormControls/FormsControl.module.css'

type MDPType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
type FormDataType = {
    captcha:string
    password: string
    rememberMe: boolean
    email: string
}

const LoginReduxForm = (props: MDPType) => {
    let onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    // if (props.isAuth){
    //     return <Redirect to={'/profile'}/>
    // }
    //
    return (
        <Form
            initialValues={{login: ''}}
            onSubmit={onSubmit}
        >
            {({handleSubmit, pristine, form, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="email" validate={composeValidators(required, maxLengthCreator(30))}
                               component={Input} placeholder="Email"/>
                    </div>
                    <div>
                        <Field type='password' name="password"
                               validate={composeValidators(required, maxLengthCreator(30), minLengthCreator(7))}
                               component={Input} placeholder="password"/>
                    </div>
                    <div>
                        <label>remember me</label>
                        <Field name="rememberMe" component={Input} type="checkbox"/>
                    </div>
                    {/*{props.error && <div className={style.formSummaryError}>*/}
                    {/*    error*/}
                    {/*</div>}*/}
                    <div>
                        <button type="submit" disabled={submitting}>Login</button>
                        <button type="button"
                                disabled={pristine || submitting}
                            // @ts-ignore
                                onClick={form.reset}>
                            Clear Values
                        </button>
                    </div>
                </form>
            )}
        </Form>
    )
}
type mapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string|null
}
const Login = (props: mapStateToPropsType & MDPType) => {
    const navigate = useNavigate()
    if (props.isAuth) {
        navigate("/profile")
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm login={props.login}/>
    </div>
}
const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    captchaUrl:state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect<mapStateToPropsType, MDPType, {}, StateType>(mapStateToProps, {login})(Login)
// с помощью hoc connect образовалась контейнерная компонента, в {} ссылки на санккреаторы , создадутся коллбэки, которые диспатчат вызов санккреатора
