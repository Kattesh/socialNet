import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { PostsType} from "../../../App";

const MyPosts = (props:PostsType) => {

    // let posts = [
    //     {id: 1, message: 'Hi, how are you?', likesCount:12},
    //     {id: 2, message: 'it\'s my first post', likesCount:23},
    //     {id: 3, message: 'it\'s my second post', likesCount:2323},
    // ]
    let postsElements =
       props.posts.map(p=>  <Post id={p.id}  message={p.message} likesCount={p.likesCount}/>)

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