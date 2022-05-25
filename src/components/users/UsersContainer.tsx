import React, {FC} from "react";
import {useSelector} from "react-redux";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {getIsFetching,} from "./users-selectors";


type UserPagePropsType = {
    pageTitle: string
}
export const UsersPage: FC<UserPagePropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)
    return <>
        <h2>{props.pageTitle}</h2>
        {isFetching ? <Preloader/> : null}
        <Users/>
    </>
}



