import {Container, Grid } from "@mui/material";
import Messages from "./Message/Messages";
import {Link, NavLink, Route, Routes, useParams} from "react-router-dom";
import {ChatsList} from "./ChatList/ChatsList";

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
                    <ChatsList />
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