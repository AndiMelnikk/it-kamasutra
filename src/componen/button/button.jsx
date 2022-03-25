import React from "react";

import styles from "./button.module.css"

const Button = ({action, text, isDisabled = false}) => {
    return (
        <button className={styles.button_styles} disabled={isDisabled} onClick={action ? () => action() : null}>
            {text}
            <span></span><span></span><span></span>
        </button>
    )

}

export default Button;

