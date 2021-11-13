import {Container, Grid,  List as MaterialList, ListItem} from "@mui/material";
import Messages from "./Message/Messages";
import {CHATS_LIST} from "../data/data";
import {Link, NavLink, Route, Routes, useParams} from "react-router-dom";

const ChatsContent = ({messages, handleSendMessage}) => {
    const { chatId } = useParams()
    console.log('chatId =>')
    console.log(chatId)

    const colorBlockLinkActive = {
        color: 'white' ,
        backgroundColor: 'green'
    }
    const colorBlockLinkNotActive = {
        color: 'black' ,
        backgroundColor: 'white'
    }


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <h3>Список чатов.</h3>
                    <ul className='link-style-ul'>
                        {CHATS_LIST.map((chat) => (
                            <>
                                <li className='link-style'>
                                    <NavLink
                                        style={({isActive}) =>
                                            ( isActive ? colorBlockLinkActive : colorBlockLinkNotActive)
                                        }
                                        to={`/chats/${chat.id}`}
                                        className='link-style-a'
                                    >
                                        {chat.name}
                                    </NavLink>
                                </li>
                            </>
                        ))}
                    </ul>
                </Grid>
                <Grid item xs={9}>
                    <Messages
                        messages={messages}
                        handleSendMessage={handleSendMessage}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default ChatsContent

/*<Route path='chats/chat3' element={<Messages messages={messages} handleSendMessage={handleSendMessage} />} />*/