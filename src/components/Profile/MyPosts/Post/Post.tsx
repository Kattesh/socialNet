import React from "react";
import s from './Post.module.css';

type PostType = {
    message:string
    likesCount:string
}
const Post:React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img src='https://f1.upet.com/A_r2u6uZhnxA_x.jpg' />
            {props.message}
            <div>
                <span>like </span>
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post;