import {
    ADD_MESSAGE,
    DELETE_MESSAGE,
    ADD_CHAT,
    DELETE_CHAT
} from "../typsStore";
import { CHATS_LIST_INITIAL } from "../../data/data";

const initialMessages = CHATS_LIST_INITIAL()
// const initialMessages = {}

export const messagesReducer = (state = initialMessages, { payload, type }) => {
    switch (type) {
        case ADD_MESSAGE:
            return {
                ...state,
                [payload.chatId]: [...state[payload.chatId], payload.message]
            }
        case DELETE_MESSAGE: {
            const newMessages = { ...state }
            newMessages[payload.chatId] = newMessages[payload.chatId].filter(
                ({ id }) => id !== payload.idToDelete
            )
            return newMessages
        }
        case ADD_CHAT:
            return {
                ...state,
                [payload.id]: []
            }
        case DELETE_CHAT: {
            const newMessage = { ...state }
            delete newMessage[payload.chatId]

            return newMessage
        }

        default: 
        return state
    }
}