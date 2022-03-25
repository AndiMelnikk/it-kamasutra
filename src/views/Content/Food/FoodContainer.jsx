import React from "react";
import {connect} from "react-redux";
import * as axios from "axios"
import Food from "./Food";
import { UPDATE_LIST_DISH_ACTION_CREATOR } from "../../../redux/reducer/news-reducer";

const mapStateToProps = (state) => {
    return{ }
}

const mapDispatchToProps = (dispatch) =>{
    return{ }
}

const FoodContainer = connect(mapStateToProps,mapDispatchToProps)(Food)

export default FoodContainer;