import React from "react"

import {AiFillStar, AiOutlineStar} from "react-icons/ai"

import styles from "./CartWorker.module.css"

function CartWorker(props) {

    // console.log(props.infoUser.followed) const [followed,     setFollowed] =
    // useState(props.infoUser.followed) const Foo = () =>{
    // props.followed(props.infoUser.id) }

    let star = new Array(5)
    for (let i = 0; i < 5; i++) 
        i < props.infoUser.rating
            ? star[i] = <AiFillStar key={i}/>
            : star[i] = <AiOutlineStar key={i}/>

    return (
        <li className={styles.cart}>
            <div className={styles.cartImg}>
                <img src={props.infoUser.profileImg} alt="крісло"/>
                <span className={styles.workerRating}>{star}</span>
            </div>
            <div className={styles.cartDescription}>
                <div className={styles.headerD}>
                    <div>
                        <h2>{props.infoUser.fullName}</h2>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                            props.followed(props.infoUser.id)
                        }}>{props.infoUser.followed
                                ? "Підписатись"
                                : "Відстежується"}</button>
                    </div>
                </div>

                <div className={styles.bioP}>
                    <p>{props.infoUser.bio}</p>
                </div>

                <ul className={styles.location}>
                    <li>
                        <span>{props.infoUser.work.city}</span>
                    </li>
                    <li>
                        <span>Підприємець</span>
                    </li>
                </ul>
            </div>
        </li>
    )
}

export default CartWorker