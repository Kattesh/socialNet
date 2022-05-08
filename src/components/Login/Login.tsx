import React from "react";
import {Form, Field} from 'react-final-form'
import {Input} from "../common/FormControls/FormsControl";
import {composeValidators, maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";


// type FormDataType={
//     login:string
//     password:string
//     rememberMe:boolean
// }

const LoginReduxForm = () => {
    return (
        <Form
            initialValues={{login: ''}}
            onSubmit={(formData) => {
                console.log(formData)}}
        >
            {({handleSubmit, pristine, form, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="login" validate={composeValidators(required, maxLengthCreator(30))}
                               component={Input} placeholder="login"/>
                    </div>
                    <div>
                        <Field name="password" validate={composeValidators(required, maxLengthCreator(30), minLengthCreator(7))}
                               component={Input} placeholder="password"/>
                    </div>
                    <div>
                        <label>remember me</label>
                        <Field name="rememberMe" component={Input} type="checkbox"/>
                    </div>
                    <div>
                        <button type="submit" disabled={submitting}>Submit</button>
                        <button type="button"
                                disabled={pristine || submitting}
                                onClick={form.reset}>
                            Clear Values
                        </button>
                    </div>
                </form>
            )}
        </Form>
    )
}
export const Login = (props: any) => {
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm/>
    </div>
}
