const MESSAGES_INPUT_TEXT = "MESSAGES-INPUT-TEXT"
const CHAT_MESSAGES = "CHAT-MESSAGES"

let initialState = {

    dialog: [
        {
            id: 1,
            title: "Топ Менеджери",
            icon: "https://image.shutterstock.com/image-vector/office-manager-vector-icon-260nw-134" +
                    "3432579.jpg",
            lastMessages: "Акції стімко піднімаються вгору, саме час їх продавати"
        }, {
            id: 2,
            title: "Бугалтерія",
            icon: "https://cdn-icons-png.flaticon.com/512/2317/2317897.png",
            lastMessages: "Цього місяця ми ідем на 3% краще ніж минулого"
        }, {
            id: 3,
            title: "Постачальники",
            icon: "https://icon-library.com/images/provider-icon/provider-icon-6.jpg",
            lastMessages: "Доствавка сировини затримуються на 3 дні"
        }, {
            id: 4,
            title: "Інвестори",
            icon: "https://cdn-icons-png.flaticon.com/512/4988/4988672.png",
            lastMessages: "Мені подобаєтстся робота за цей місяць"
        }
    ],
    chatMessages: [],
    messages_input_text: ''
}

function dialogReducer(state = initialState, action) {

    switch (action.type) {
        case MESSAGES_INPUT_TEXT:
            return {
                ...state,
                messages_input_text: action.text_input
            };
        case CHAT_MESSAGES:
            return {
                ...state,
                chatMessages: [
                    ...state.chatMessages,
                    action.data
                ]
            }
        default:
            return state;
    }
}

export const MESSAGES_INPUT_TEXT_ACTION_CREATOR = (text) => ({type: MESSAGES_INPUT_TEXT, text_input: text})
export const CHAT_MESSAGES_ACTION_CREATOR = (data) => {
    
    let newMessages = {
        id: 10,
        message: data
    }

    return {type: CHAT_MESSAGES, data: newMessages}
}

export default dialogReducer