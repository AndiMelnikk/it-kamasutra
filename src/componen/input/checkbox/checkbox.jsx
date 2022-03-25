import React from "react";
import styles from './checkbox.module.css';

function Checkbox(props) {

    return (
        <span>
            <label className={styles.customCheckbox} >
                <input  type="checkbox" name={props.name} id={props.id}/>
                <span className={styles.check_box}></span>
                {props.name}
            </label>
        </span>
    );
}

export default Checkbox;