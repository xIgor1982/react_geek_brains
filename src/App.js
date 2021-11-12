import './App.css';
import ChatsContent from "./Components/ChatsContent"
import {useCallback, useEffect, useRef, useState} from "react";
import {v4 as uuidv4} from "uuid";
import {ANSWER_BOT, AUTHORS, INITIAL_MESSAGE} from "./data/data";
import {AppBar, Container, Grid, Toolbar, Typography} from "@mui/material";
import {Link, Route, Routes} from "react-router-dom";
import {Home} from "./Components/Home";
import {Profile} from "./Components/Profile";

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

    const AppBarStyle = {
        appBarUlStyle: {
            listStyle: 'none',
            margin: 0,
            paddingLeft: 0,
            display: 'flex'
        },
        liStyle: {
            display: 'inline-block'
        },
        linkStyle: {
            margin: "1rem",
            textDecoration: "none",
            color: 'white',
            fontSize: '20px'
        }
    }

    return (
        <>
            <AppBar position="sticky" sx={{mb: 0.5}}>
                <Toolbar variant="dense">
                    <ul style={AppBarStyle.appBarUlStyle}>
                        <li>
                            <Link to="/" style={AppBarStyle.linkStyle}>Home</Link>
                        </li>
                        <li>
                            <Link to="/chats" style={AppBarStyle.linkStyle}>Chats</Link>
                        </li>
                        <li>
                            <Link to="/profile" style={AppBarStyle.linkStyle}>Profile</Link>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="chats" element={
                    <ChatsContent
                        messages={messages}
                        handleSendMessage={handleSendMessage}
                    />
                }
                />
                <Route path="profile" element={<Profile/>}/>
                <Route path="*" element={<h3>404</h3>}/>
            </Routes>
        </>
    );
}

export default App;
