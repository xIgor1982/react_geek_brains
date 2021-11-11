import ChatsList from "./Chats/ChatsList";
import {Container, Grid} from "@mui/material";
import Messages from "./Message/Messages";

const ChatsContent = ({messages, handleSendMessage}) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <ChatsList />
                </Grid>
                <Grid item xs={10}>
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