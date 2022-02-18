import React from 'react';
import  s from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
import {PostsType} from "../../App";

const Profile = (props:PostsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>

        </div>
    )
}

export default Profile;