import ChatsList from "./Chats/ChatsList";
import {Container, Grid} from "@mui/material";
import Messages from "./Message/Messages";

const ChatsContent = ({messages, chatsNameList, AUTHORS, handleSendMessage}) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <ChatsList
                        chatsNameList={chatsNameList}
                    />
                </Grid>
                <Grid item xs={10}>
                    <Messages
                        messages={messages}
                        AUTHORS={AUTHORS}
                        handleSendMessage={handleSendMessage}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default ChatsContent