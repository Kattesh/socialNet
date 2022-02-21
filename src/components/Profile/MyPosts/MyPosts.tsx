import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../App";


const MyPosts = (props: PostsType) => {
    let postsElements =
        props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button className={s.button}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;