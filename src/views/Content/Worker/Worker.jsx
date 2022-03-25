import React from "react"

import CartWorker from "./CartWorker/CartWorker"

import styles from "./Worker.module.css"

function Worker(props) {

    let listCartWorker = props
        .worker
        .map(e => < CartWorker  followed={props.followed} infoUser = { e } key = { e.id } />)

    return (
        <div className={styles.container}>
            <h1>пошук</h1>
            <ul className={styles.workersCarts}>
                {listCartWorker}
            </ul>
        </div>
    )
}

export default Worker