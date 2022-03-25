import React from "react";
import {connect} from "react-redux";
import * as axios from "axios"
import News from "./News";
import {UPDATE_LIST_NEWS_AC} from "../../../redux/reducer/news-reducer";
import WorkerContainer from "../Worker/WorkerContainer";

class NewsClass extends React.Component {

    componentDidMount() {


        if (this.props.listDish.length === 0) {
            axios.get("https://api.thenewsapi.com/v1/news/all?api_token=k8l5q0wpw4ADbmr2qgpvYhwlCy0dE4P3yqtEYCfS", {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods ': 'POST, GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept'
                }
            })
                .then(res => {
                    console.log(res.data)
                    return
                })
        }
        console.log('Компонет загрузилась УРА')
    }

    render() {
        return <News {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        listDish: state.newsPages.listDish,
        listClassesPost: state.newsPages.listClassesPost,
        pages: state.newsPages.pagesNews,
        buttonDisabled: state.newsPages.buttonDisabled,
        newsBlock: state.newsPages.listClassesPost.newsBlock
    }
}


const NewsContainer = connect(mapStateToProps, {UPDATE_LIST_NEWS_AC})(NewsClass)

export default NewsContainer;