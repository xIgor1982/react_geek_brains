import './App.css';
import ChatsHeader from "./Components/ChatsHeader";
import ChatsContent from "./Components/ChatsContent"
import {useCallback, useEffect, useRef, useState} from "react";
import {v4 as uuidv4} from "uuid";
import {ANSWER_BOT, AUTHORS, INITIAL_MESSAGE} from "./data/data";

function App() {
    //useState
    const [messages, setMessages] = useState(INITIAL_MESSAGE)

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
                handleSendMessage={handleSendMessage}
            />
        </>
    );
}

export default App;
