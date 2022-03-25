import React from "react";
import {connect} from "react-redux";

import {followed} from "../../../redux/reducer/worker-redux";

import Worker from "./Worker";

const mapStateToProps = (state) => {
    return {worker: state.workerPages.worker}
}


const WorkerContainer = connect(mapStateToProps, {followed})(Worker)

export default WorkerContainer