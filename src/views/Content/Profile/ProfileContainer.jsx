import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";

const mapStateToProps = (state) => {
    return {profilePages: state.profilePages}
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

let ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer