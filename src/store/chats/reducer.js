import { CHATS_LIST } from "../../data/data";
import { ADD_CHAT, DELETE_CHAT } from "../typsStore";

const initialChats = CHATS_LIST
// const initialChats = []

export const chatsReducer = (state = initialChats, actions) => {
    switch (actions.type) {
        case ADD_CHAT:
            return [...state, actions.payload]
        case DELETE_CHAT:
            return state.filter(({ id }) => id !== actions.payload.chatId)
        default:
            return state
    }
}