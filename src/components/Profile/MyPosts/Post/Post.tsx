import React from "react";
import s from './Post.module.css';
import {PostType} from "../../../../redux/state";


const Post:React.FC<PostType> = (props:PostType) => {
    return (
        <div className={s.item}>
            <img src='https://f1.upet.com/A_r2u6uZhnxA_x.jpg' alt="item" />
            {props.message}
            <div>
                <span>likes </span>
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post;