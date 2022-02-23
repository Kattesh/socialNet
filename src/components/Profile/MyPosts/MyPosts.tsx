import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../App";

type PropsType = PostsType & {
    addPost: (postMessage: string) => void
}

const MyPosts = (props: PropsType) => {
    let postsElements =
        props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement=React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current) props.addPost(newPostElement.current.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref ={newPostElement}/>
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