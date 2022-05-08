import React from "react";
import {addPostAC, PostType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ActionsTypes, StateType} from "../../../redux/redux-store";

type MapStatePropsType={
    posts: PostType[]
    newPostText: string
}
type MapDispatchPropsType = {
    addPost:(newPostText: string)=>void
}
let mapStateToProps = (state:StateType): MapStatePropsType  => {
    return {
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch:(action: ActionsTypes) => void): MapDispatchPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
