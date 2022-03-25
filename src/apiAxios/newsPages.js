import axios from 'axios';

export const updateNews = (path) => {

    let b = new Promise((resolve, reject) => {
        resolve('Виконано');
    })

    b.then(response => {
        console.log(response + " b_1")
        setTimeout(() => {
            return response + " b_1";
        }, 5000)
    }).then(response => {
        console.log(response + " b_2")
        return response + " b_2";
    })
}






// if (this.props.listDish.length === 0) {
//     axios.get("https://api.thenewsapi.com/v1/news/top?api_token=k8l5q0wpw4ADbmr2qgpvYhwlCy0dE4P3yqtEYCfS&categories=business%2Ctech&&limit=5&locale=ua")
//         .then(res => {
//             alert('Отримано дані')
//             return this
//                 .props.updateListDish(res.data.data)
//         })
// }