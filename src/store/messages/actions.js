import { ADD_MESSAGE } from "../typsStore";
import { DELETE_MESSAGE } from "../typsStore";

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId, 
        message
    }
})

export const deleteMessage = (chatId, idToDelete) => ({
    type: DELETE_MESSAGE,
    payload: {
        chatId,
        idToDelete
    }
})