import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../App";

type PropsType = PostsType & {
    addPost: (postMessage: string) => void
    newPostText:string
    updateNewPostText:(newPostElement:string)=>void
}

const MyPosts = (props: PropsType) => {
    let postsElements =
        props.posts.map(p => <Post  id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement=React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current?.value) props.addPost(newPostElement.current.value)
    }

    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }
    // e.currentTarget.value
    // newPostElement.current?.value
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref ={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}
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