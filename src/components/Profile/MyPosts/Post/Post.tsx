import React from "react";
import s from './Post.module.css';
import {PostType} from "../../../../redux/state";
import avatar from '../../../../assets/images/avatar.jpg'


const Post:React.FC<PostType> = (props:PostType) => {
    return (
        <div className={s.item}>
            <img src={avatar}
                 alt="item!!!" />
            {props.message}
            <div>
                <span>likes </span>
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post;