import React from "react";
import styles from './Profile.module.css'
import Header from "./Header/Header";
import Posts from "./Post/Posts";

function Profile(props) {
    return (
        <div className={styles.content}>
            <Header header={props.profilePages.header}/>
            <Posts post={props.profilePages.post}/>
        </div>
    )
}

export default Profile