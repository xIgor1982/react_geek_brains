import { ADD_CHAT, DELETE_CHAT } from "../typsStore";

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat
})

export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    payload: {
        chatId: id
    }
})