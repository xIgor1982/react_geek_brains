import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import ChatListItem from "./ChatListItem";
import { addChat } from '../../store/chats/actions';
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router";
import { selectorChats } from '../../store/chats/selectors'
import {selectorMessages} from '../../store/messages/selectors'
import { Container, Grid, TextField } from "@mui/material";
import { TEXT_FIRST_LOAD } from "../../data/data";

export const ChatsList = ({ onDelete }) => {
    const chatList = useSelector(selectorChats)
    const { chatId } = useParams();

    const messages = useSelector(selectorMessages);

    // console.log('chatList >>> ', chatList)
    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit e >>> ', e.target)

        dispatch(addChat({ name: value, id: uuidv4() }))

        setValue('')
    }

    return (
        <>
            <h3>Список чатов</h3>
            <ul className='link-style-ul'>
                {chatList.map((chat, index) => (
                    <li className='link-style' key={uuidv4()}>
                        <ChatListItem
                            number={index + 1}
                            chat={chat}
                        />
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <TextField value={value} onChange={handleChange} />
                <button>Добавить чат</button>
            </form>
        </>
    )
}