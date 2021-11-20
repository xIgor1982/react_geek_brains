import { v4 as uuidv4 } from "uuid";
import ChatListItem from "./ChatListItem";

export const ChatsList = ({ chatList = [], onDelete }) => {
    return (
        <>
            <h3>Список чатов</h3>
            <ul className='link-style-ul'>
                {chatList.map((chat, index) => (
                    <li className='link-style' key={uuidv4()}>
                        <ChatListItem
                            number={index + 1}
                            chat={chat}
                            onDelete={onDelete}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}