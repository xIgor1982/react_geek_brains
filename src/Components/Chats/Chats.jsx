import { Container, Grid } from "@mui/material";
import { useParams, Navigate } from "react-router-dom";
import { ChatsList } from "../ChatList/ChatsList";
import { useCallback, useEffect, useRef, useState } from "react";
import { ANSWER_BOT, AUTHORS, CHATS_LIST_INITIAL, TEXT_FIRST_LOAD, CHATS_LIST } from "../../data/data";
import { v4 as uuidv4 } from "uuid";
import Messages from "../Message/Messages";

const Chats = () => {
    const { chatId } = useParams()
    const [messages, setMessages] = useState(CHATS_LIST_INITIAL)
    const [chatList, setChatList] = useState(CHATS_LIST)
    const parentRef = useRef()

    const handleAddMessage = useCallback(
        (newMessage) => {
            setMessages((prevMessage) => ({
                ...prevMessage,
                [chatId]: [...prevMessage[chatId], newMessage]
            }))
        },
        [chatId]
    )

    const handleDeleteChats = useCallback((idToDelete) => {
        setChatList(
            (prevChatList) => {
                prevChatList.filter(({ id }) => id !== idToDelete)
            })
        setMessages((prevMessages) => {
            const newMessages = {...prevMessages}
            delete newMessages[idToDelete]

            return newMessages
        })
    }, [])


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
    }, [messages, chatId, handleAddMessage])

    if (chatId && !messages[chatId]) {
        return <Navigate replace to="/chats" />
    }

    return (
        <Container ref={parentRef}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <ChatsList chatList={chatList} onDelete={handleDeleteChats} />
                </Grid>
                <Grid item xs={9}>
                    {
                        !chatId
                            ?
                            <h2>{TEXT_FIRST_LOAD}</h2>
                            :
                            <>
                                <h3>Список сообщений</h3>
                                <Messages
                                    messages={messages[chatId]}
                                    handleAddMessage={handleAddMessage}
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