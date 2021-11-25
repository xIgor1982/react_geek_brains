import { ANSWER_BOT, AUTHORS } from "../../data/data";
import { ADD_MESSAGE } from "../typsStore";
import { DELETE_MESSAGE } from "../typsStore";
import { v4 as uuidv4 } from "uuid";

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

let timeout

export const addMessageWithThunk = (chatId, message) => (dispatch) => {
    dispatch(addMessage(chatId, message))

    if (message.author !== AUTHORS.bot) {
        if (timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            const botMessage = {
                author: AUTHORS.bot,
                id: uuidv4(),
                text: ANSWER_BOT()
            }
            dispatch(addMessage(chatId, botMessage))
        }, 1000)
    }
}