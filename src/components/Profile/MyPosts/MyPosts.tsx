import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount:12},
        {id: 2, message: 'it\'s my first post', likesCount:23},
    ]
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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>

            </div>

        </div>
    )
}

export default MyPosts;