// type ValidatorsType={
//     required:(value: string)=>void
//     maxLengthCreator:(maxLength: number)=>void
// }
export const required = (value: string) => (value ? undefined : 'Required')
export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value && value.length > maxLength) return ` should be less than ${maxLength} characters`
    return undefined
}
export const minLengthCreator = (minLength: number) => (value: string) => {
    if (value && value.length <= minLength) return ` should be at least  ${minLength + 1} characters`
    return undefined
}
export const composeValidators = (...validators: any[]) => (value: any) =>
    validators.reduce((error, validator) => error || validator(value), undefined)
