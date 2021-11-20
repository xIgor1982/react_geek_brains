import * as React from 'react';
import { NavLink } from "react-router-dom";
import { MY_STYLE } from "../../data/data";

const ChatListItem = ({ number, chat, onDelete }) => {
    const handleDeleteClick = () => {
        console.log('удалить чат > ', chat.id)
        onDelete(chat.id);
      };

    return (
        <>
            <NavLink
                style={({ isActive }) =>
                    (isActive ? MY_STYLE.colorBlockLinkActive : MY_STYLE.colorBlockLinkNotActive)
                }
                to={`/chats/${chat.id}`}
                className='link-style-a'
            >
                {number}) {chat.name}
            </NavLink>
            <button onClick={handleDeleteClick}>Удалить чат</button>
        </>
    )
}

export default ChatListItem;

