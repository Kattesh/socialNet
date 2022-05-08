import React from "react"
import style from './FormsControl.module.css'

const FormControl=({input, meta, child, ...props}: any)=>{
    const hasError=meta.error && meta.touched
    return (
        <div className={style.formControl + ' ' +( hasError? style.error: '')}>
            <div>
                {props.children}
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input,meta,child,...restProps}=props
    return <FormControl {...props}><textarea {...input}{...restProps}/>
    </FormControl>
}
export const Input = (props: any) => {
    const {input,meta,child,...restProps}=props
    return <FormControl {...props}><input {...input}{...restProps}/>
    </FormControl>
}


