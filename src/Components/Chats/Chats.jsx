import {Container, Grid} from "@mui/material";
import {NavLink, Route, Routes, useParams, Navigate} from "react-router-dom";
import {ChatsList} from "../ChatList/ChatsList";
import {useCallback, useEffect, useRef, useState} from "react";
import {ANSWER_BOT, AUTHORS, CHATS_LIST_INITIAL, TEXT_FIRST_LOAD} from "../../data/data";
import {v4 as uuidv4} from "uuid";
import Messages from "../Message/Messages";

const Chats = () => {
    const {chatId} = useParams()
    const [messages, setMessages] = useState(CHATS_LIST_INITIAL)
    const parentRef = useRef()

    const handleSendMessage = useCallback(
        (newMessage) => {
            setMessages((prevMessage) => ({
                ...prevMessage,
                [chatId]: [...prevMessage[chatId], newMessage]
            }))
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
                    handleSendMessage({
                        author: AUTHORS.bot,
                        text: ANSWER_BOT[Math.floor(Math.random() * ANSWER_BOT.length)],
                        id: uuidv4(),
                    }),
                1000
            )
            return () => clearTimeout(timeout)
        }
    }, [messages, chatId])

    if (chatId && !messages[chatId]) { 
        return <Navigate replace to="/chats" />
    }

    return (
        <Container ref={parentRef}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <ChatsList/>
                </Grid>
                <Grid item xs={9}>

                    {
                        !chatId ?
                            <h2>{TEXT_FIRST_LOAD}</h2>
                            :
                            <>
                                <h3>Список сообщений</h3>
                                <Messages
                                    messages={messages[chatId]}
                                    handleSendMessage={handleSendMessage}
                                    chatId={chatId}
                                />
                            </>
                    }
                </Grid>
            </Grid>
        </Container>
    )
}

export default Chats

/*<Route path='chats/chat3' element={<Messages messages={messages} handleSendMessage={handleSendMessage} />} />*/