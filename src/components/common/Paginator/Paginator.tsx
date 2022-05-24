import React from "react";
import styles from "./Paginator.module.css";

type PaginatorPropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (page: number) => void
}
export let Paginator = (props:PaginatorPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div className={styles.pages}>
            {pages.map(p => {
                return <span key={p} className={props.currentPage === p ? styles.selectedPage : ''} onClick={(e) => {
                    props.onPageChanged(p)
                }}>{p},</span>
            })}
        </div>
    </div>
}

