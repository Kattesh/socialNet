import React from "react";
import {addPostActionCreator, PostType, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ActionsTypes, StateType} from "../../../redux/redux-store";

type MapStatePropsType={
    posts: PostType[]
    newPostText: string
}
type MapDispatchPropsType = {
    updateNewPostText:(text: string)=>void
    addPost:()=>void
}
let mapStateToProps = (state:StateType): MapStatePropsType  => {
    return {
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch:(action: ActionsTypes) => void): MapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
           dispatch(updateNewPostTextActionCreator( text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
