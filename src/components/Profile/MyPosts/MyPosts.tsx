import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

import {ActionsTypes} from "../../../redux/redux-store";


 type PostType = {
    id: number
    message: string
    likesCount: number
}
type PropsType = {
    newPostText:string
    posts: PostType[]
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: PropsType) => {
    let postsElements =
        props.posts.map(p => <Post  id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement=React.createRef<HTMLTextAreaElement>()

    let onAddPost = () => {
        props.addPost()

    }

    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.updateNewPostText(text)

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref ={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}
                            className={s.button}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;