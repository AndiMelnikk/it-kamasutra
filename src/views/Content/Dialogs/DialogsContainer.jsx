import React from "react";

import {connect} from "react-redux";

import {MESSAGES_INPUT_TEXT_ACTION_CREATOR, CHAT_MESSAGES_ACTION_CREATOR} from "../../../redux/reducer/dialog-reducer";

import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    return {
        dialog: state.dialogPages.dialog,
        chat: {
            messagesInputText: state.dialogPages.messages_input_text,
            chatMessages: state.dialogPages.chatMessages
        }
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        Chat: {
            sentMessage: (message) => {
                dispatch(CHAT_MESSAGES_ACTION_CREATOR(message))
            },
            inputText: (text) => {
                dispatch(MESSAGES_INPUT_TEXT_ACTION_CREATOR(text)) 
            }
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer