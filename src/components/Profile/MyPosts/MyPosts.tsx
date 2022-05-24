import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post"
import {Field, Form} from "react-final-form"
import {composeValidators, maxLengthCreator, required} from "../../../utils/validators/validators"
import {Textarea} from "../../common/FormControls/FormsControl"

type PostType = {
    id: number
    message: string
    likesCount: number
}
type PropsType = addPostType & {
    newPostText: string
    posts: PostType[]
}
type addPostType = {
    addPost: (newPostText: string) => void
}

const MyPosts = React.memo((props: PropsType) => {
    let postsElements =
        props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm addPost={props.addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})

const AddNewPostForm = (props: addPostType) => {
    let addPost = (values: { newPostText: string }) => {
        props.addPost(values.newPostText)
    }
    return (
        <Form
            onSubmit={addPost}>
            {({handleSubmit, pristine, form, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="newPostText" validate={composeValidators(required, maxLengthCreator(20))}
                               component={Textarea} placeholder="Post message "/>
                    </div>
                    <div>
                        <button type="submit"
                                disabled={submitting}
                            // onClick={form.reset}
                                className={s.button}>Add post
                        </button>
                    </div>
                </form>
            )}
        </Form>
    )
}
export default MyPosts;