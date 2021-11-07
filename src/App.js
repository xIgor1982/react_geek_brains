import './App.css';
import ChatsHeader from "./Components/ChatsHeader";
import ChatsContent from "./Components/ChatsContent"
import {useCallback, useEffect, useRef, useState} from "react";
import {v4 as uuidv4} from "uuid";

function App({initialMessages, chatsNameList, AUTHORS, ANSWER_BOT}) {
    //useState
    const [messages, setMessages] = useState(initialMessages)

    //useRef
    const parentRef = useRef()

    const handleSendMessage = useCallback((newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    }, [])

    //useEffect
    useEffect(() => {
        if (messages.length && messages[messages.length - 1].author != AUTHORS.bot
        ) {
            const timeout = setTimeout(() => handleSendMessage({
                    id: uuidv4(),
                    text: ANSWER_BOT[Math.floor(Math.random() * ANSWER_BOT.length)],
                    author: AUTHORS.bot
                }),
                1500)
            return () => clearTimeout(timeout)
        }
    }, [messages])


    return (
        <>
            <ChatsHeader/>
            <ChatsContent
                messages={messages}
                chatsNameList={chatsNameList}
                handleSendMessage={handleSendMessage}
                AUTHORS={AUTHORS}
            />
        </>
    );
}

export default App;
