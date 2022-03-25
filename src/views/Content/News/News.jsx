import React from "react";

import styles from "./News.module.css"

import Preloader from "../../../componen/preloader/preloade";
import Button from "../../../componen/button/button";

const News = (props) => {

    const contentPostNews = (post) => {
        return (
            <div className={styles.content}>
                <div className={styles.blockImg}>
                    {props.listDish[post] ? <img src={props.listDish[post].image_url}/> : <Preloader type="img"/>}
                </div>
                <div className={styles.blockText}>
                    {props.listDish[post] ? <h2>{props.listDish[post].title}</h2> : <Preloader type="bigText"/>}
                    {props.listDish[post] ? <p>{props.listDish[post].description}</p> :
                        <Preloader type="smallText"/>}
                </div>
            </div>
        )
    }

    const blockClassPost = () => {
        return props.listClassesPost.postClass.map((e, index) => {
            return (
                <div className={styles[e]} key={index}>
                    {contentPostNews(index)}
                </div>
            )
        })
    }

    let blockHtml = props.newsBlock.map((e, index) => {
        return (
            <div key={index} className={[styles.blockNews, styles[e]].join(' ')}>
                {blockClassPost()}
            </div>
        )
    })

    const addNews = (pages) => {
        props.UPDATE_LIST_NEWS_AC(pages)
    }

    return (
        <div className={styles.containerNews}>

            <div className={styles.loadNewsBlock}>
                <Button isDisabled={props.buttonDisabled} action={() => addNews(props.pages)} text="Оновити"/>
            </div>

            {blockHtml}
        </div>
    )
}


export default News;


// axios.get("https://api.thenewsapi.com/v1/news/uuid/91346253-671c-4cfa-9f0b-cf1faa764110?api_token=k8l5q0wpw4ADbmr2qgpvYhwlCy0dE4P3yqtEYCfS&language=ru")
//     .then(res => {
//         alert('Отримано дані')
//         console.log(res.data);
//     })

// k8l5q0wpw4ADbmr2qgpvYhwlCy0dE4P3yqtEYCfS


// if (props.listDish.length === 0) {     alert("Запрос")     axios
// .get("https://api.thenewsapi.com/v1/news/top?api_token=k8l5q0wpw4ADbmr2qgpvYh
// wlCy0dE4P3yqtEYCfS&categories=business%2Ctech&search=apple&limit=50")
// .then(res => {             alert('Отримано дані')             return this
// .props                 .updateListDish(res.data.data)         }) } apli
// =()=>{     var params = {         api_token:
// 'k8l5q0wpw4ADbmr2qgpvYhwlCy0dE4P3yqtEYCfS',         categories:
// 'business,tech',         search: 'apple',         limit: '50'     };     var
// esc = encodeURIComponent;     var query = Object.keys(params)
// .map(function(k) {return esc(k) + '=' + esc(params[k]);})         .join('&');
//         console.log(query) }


//         import React from "react";

// k8l5q0wpw4ADbmr2qgpvYhwlCy0dE4P3yqtEYCfS
//         console.log(query) }