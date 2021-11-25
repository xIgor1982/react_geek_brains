import { Container, Grid } from "@mui/material";
import { ChatsList } from "../ChatList/ChatsList";
import { useCallback } from "react";
import { selectorMessages } from '../../store/messages/selectors'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import FormAddMessage from "../FormAddMessage/FormAddMessage";
import MessagesList from "../Message/MessagesList";
import { addMessageWithThunk } from '../../store/messages/actions'
import { Navigate, useParams } from "react-router";

const Chats = () => {
    const { chatId } = useParams()

    const messages = useSelector(selectorMessages)
    const dispatch = useDispatch()

    const handleAddMessage = useCallback((message) => {
        dispatch(addMessageWithThunk(chatId, message))
    }, [chatId, dispatch])

    if (!messages[chatId]) {
        return <Navigate replace to="/chats" />;
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <ChatsList />
                </Grid>
                <Grid item xs={9}>
                    <h3>Список сообщений</h3>
                    <MessagesList
                        messages={messages[chatId]}
                    />
                    <FormAddMessage
                        onAddMessage={handleAddMessage}
                        chatId={chatId}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Chats