import React from "react";
import Post from "./Post";

import {ADD_POST_ACTION_CREATOR} from "../../../redux/reducer/profile-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {profile: state.profilePages.post}
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (data) => {
            dispatch(ADD_POST_ACTION_CREATOR(data))
        }
    }
}

let PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)

export default PostContainer