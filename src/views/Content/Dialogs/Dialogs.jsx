import React from "react";

import styles from './Dialogs.module.css'

// Block
import Chat from "./Chat/Chat";
import Talk from "./Talk/Talk";

function Dialogs(props) {

    let dialogs = props
        .dialog
        .map(m => <Talk message={m}  key={m.id}/>)

    return (
        <div className={styles.dialogs}>
            <div className={styles.chat__block}>
                <Chat chat={props.chat} Chat={props.Chat} />
            </div>
            <div className={styles.user__block}>
                <div className={styles.dialogs_block_chat}>
                    <div className={styles.search__block}>
                        <input type="text" name="searchDialog"/>
                    </div>
                    <ul>
                        {dialogs}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dialogs