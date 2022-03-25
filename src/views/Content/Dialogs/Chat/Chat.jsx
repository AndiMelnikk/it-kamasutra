import React, {useRef, useEffect, useState} from "react";

import styles from './Chat.module.css'



function Chat(props) {
    const refTextArea = useRef()

    let [valueM,
        setValueM] = useState(props.chat.messagesInputText)

    useEffect(() => {
        props.Chat.inputText(refTextArea.current.value)
    }, [valueM])

    let sentMessage = () => {
        props.Chat.sentMessage(refTextArea.current.value)
        setValueM('')
    }

    let allMessages = props
        .chat
        .chatMessages
        .map(m => {
            return (
                <li key={m.id}>{m.message}</li>
            )
        })

    return (
        <div className={styles.chatBlock}>
            <div className={styles.panelChat}>
                <ul className={styles.ulMessages}>
                    {allMessages}
                </ul>

            </div>
            <div className={styles.panelWrite}>
                <div className={styles.inputText}>
                    <textarea
                        ref={refTextArea}
                        onChange={event => setValueM(event.target.value)}
                        name="messages"
                        value={valueM}/>
                </div>
                <div className={styles.buttonText}>
                    <button onClick={sentMessage}>
                        Відправити
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Chat