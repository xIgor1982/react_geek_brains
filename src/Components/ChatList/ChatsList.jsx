import {CHATS_LIST, MY_STYLE} from "../../data/data";
import {NavLink} from "react-router-dom";
import {v4 as uuidv4} from "uuid";

export const ChatsList = () => {
    return (
        <>
            <h3>Список чатов</h3>
            <ul className='link-style-ul'>
                {CHATS_LIST.map((chat) => (
                    <li className='link-style' key={uuidv4()}>
                        <NavLink
                            style={({isActive}) =>
                                (isActive ? MY_STYLE.colorBlockLinkActive : MY_STYLE.colorBlockLinkNotActive)
                            }
                            to={`/chats/${chat.id}`}
                            className='link-style-a'
                        >
                            {chat.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    )
}