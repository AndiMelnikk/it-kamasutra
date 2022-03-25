import React from "react";

import styles from "./preloader.module.css"

const Preloader = (props) => {

    let loader;

    switch (props.type) {
        case 'img':
            loader = () => {
                return (
                    <div className={styles.img_block}></div>
                )
            }
            break
        case 'smallText':
            loader = () => {
                return (
                    <div className={styles.smallText_block}>
                        <div>
                            <span></span>
                        </div>
                        <div>
                            <span></span>
                        </div>
                        <div>
                            <span></span>
                        </div>
                    </div>
                )
            }
            break
        case 'bigText':
            loader = () => {
                return <div className={styles.bidText_block}>
                    <span></span>
                </div>
            }
            break
        default:
            loader = () => {
                return <p>Загрузка...</p>
            }
    }

    return (
        <>
            {loader()}
        </>
    )
}

export default Preloader;
