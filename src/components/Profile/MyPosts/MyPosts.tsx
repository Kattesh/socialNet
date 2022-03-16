import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../App";
import {ActionsTypes, addPostActionCreator, PostType, updateNewPostTextActionCreator} from "../../../redux/state";
import avatar from '../../../assets/images/avatar.jpg'

type PropsType = PostsType & {
    newPostText:string
    posts: PostType[]
    dispatch:(action:ActionsTypes)=>void
}

const MyPosts = (props: PropsType) => {
    let postsElements =
        props.posts.map(p => <Post  id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement=React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current?.value) props.dispatch(addPostActionCreator())
    }

    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

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