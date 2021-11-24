import { Container, Grid } from "@mui/material";
import { ChatsList } from "../ChatList/ChatsList";
import { useCallback, useEffect } from "react";
import { ANSWER_BOT, AUTHORS } from "../../data/data";
import { v4 as uuidv4 } from "uuid";
import { selectorMessages } from '../../store/messages/selectors'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import FormAddMessage from "../FormAddMessage/FormAddMessage";
import MessagesList from "../Message/MessagesList";
import { addMessage } from '../../store/messages/actions'
import { Navigate, useParams } from "react-router";

const Chats = () => {
    const { chatId } = useParams()

    const messages = useSelector(selectorMessages)
    const dispatch = useDispatch()

    const handleAddMessage = useCallback(
        (newMessage) => {
            dispatch(addMessage(chatId, newMessage))
        },
        [chatId]
    )

    useEffect(() => {
        if (
            messages[chatId]?.length &&
            messages[chatId]?.[messages[chatId]?.length - 1].author !== AUTHORS.bot
        ) {
            const timeout = setTimeout(
                () =>
                    handleAddMessage({
                        author: AUTHORS.bot,
                        text: ANSWER_BOT[Math.floor(Math.random() * ANSWER_BOT.length)],
                        id: uuidv4(),
                    }),
                1000
            )
            return () => clearTimeout(timeout)
        }
    }, [messages])

    // console.log('messages[chatId] >>> ', messages)

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