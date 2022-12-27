import React from "react"
import style from './FormsControl.module.css'


const FormControl = ({input, meta: {touched, error}, children}: any) => {
    const hasError = error && touched
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
                {children}
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input}{...restProps}/>
    </FormControl>
}
export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input}{...restProps}/>
    </FormControl>
}



