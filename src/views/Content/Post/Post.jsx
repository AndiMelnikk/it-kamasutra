import React, {useState} from "react";
import Post from "../../Component/Post/Post";
import styles from './Post.module.css'

function Post_f(props) {

    let [textNewMessages,
        setTextNewMessages] = useState('')

    let post = props
        .profile
        .map(p => <Post post={p} key={p.id}/>)

    let addPost = () => {
        props.addPost({
            id: props.profile.length + 1,
            title: textNewMessages,
            describe: "There was a time when we sailed on together Once had a dream that we shared on t" +
                    "he way There was a place where we used to seek shelter I never knew the pain of " +
                    "the price I would pay You led me on with a cloak and a dagger And I didn't know " +
                    "you had made other plans You had me believe we were meant for forever I really t" +
                    "hought my heart would be safe in your hands Lorelei My ship has passed you by An" +
                    "d though you promised me to show the way You led me astray You were my lorelei W" +
                    "hat kind of fool was I Cause I believed in every word you said And now I wonder " +
                    "why Lorelei",
            img: "https://estore.ua/media/catalog/product/cache/8/image/650x650/9df78eab33525d08d6" +
                    "e5fb8d27136e95/i/p/iphone-12-purple_1_.jpeg",
            time: "10:35",
            date: "2022.02.12",
            name: "Андрій",
            commentNumber: 0,
            likeCountry: 0
        })
        setTextNewMessages('') 
    }
    
    return (
        <div className={styles.news}>
            <div className={styles.header__block}>
                <h2>News</h2>
            </div>
            <div className={styles.posts__block}>
                <textarea
                    onChange={event => {
                    setTextNewMessages(event.target.value)
                }}
                    name="post"
                    cols="30"
                    rows="3"
                    value={textNewMessages}/>
                <button onClick={addPost}>
                    Добавити пост</button>
                <ul>
                    {post}
                </ul>
            </div>
        </div>
    )
}

export default Post_f