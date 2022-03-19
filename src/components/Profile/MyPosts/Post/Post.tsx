import React from "react";
import s from './Post.module.css';
import avatar from '../../../../assets/images/avatar.jpg'
import {PostType} from "../../../../redux/profile-reducer";


const Post:React.FC<PostType> = (props:PostType) => {
    return (
        <div className={s.item}>
            <img src={avatar}
                 alt="avatar"/>
            {props.message}
            <div>
                <span>likes </span>
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post;