import React from "react";
import styles from './Talk.module.css'
import {NavLink} from 'react-router-dom'

function Talk(props) {
    let path = "/dialogs/" + props.message.id
    return (
        <li className={styles.li_}>
            <NavLink
                to={path}
                className={(navData) => (navData.isActive
                ? styles.activeLink
                : 'none')}>
                <div>
                    <img src={props.message.icon} alt="icon_chat"/>
                </div>
                <div>
                    <h3>{props.message.title}</h3>
                    <p>{props.message.lastMessages}</p>
                </div>
            </NavLink>
        </li>
    )
}

export default Talk