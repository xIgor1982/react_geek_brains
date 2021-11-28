import * as React from 'react';
import '../../App.css';
import { AppBar, Toolbar } from "@mui/material";

import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "../Home/Home";
import { Profile } from "../Profile/Profile";
import { ChatsListMain } from '../ChatList/ChatsListMain';
import Chats from '../Chats/Chats';
import Gists from '../Gist/Gist';

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <AppBar position="sticky" color='inherit' sx={{ mb: 0.5 }}>
                <Toolbar variant="dense">
                    <ul className='app-barb-ul-style'>
                        <li><Link to="/" className={'app-link-style'}>Home</Link></li>
                        <li><Link to="/chats" className={'app-link-style'}>Chats</Link></li>
                        <li><Link to="/gists" className={'app-link-style'}>Gists</Link></li>
                        <li><Link to="/profile" className={'app-link-style'}>Profile</Link></li>

                    </ul>
                </Toolbar>
            </AppBar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="chats">
                    <Route index element={<ChatsListMain />} />
                    <Route path=':chatId' element={<Chats />} />
                </Route>
                <Route path="profile" element={<Profile />} />
                <Route path="gists" element={<Gists />} />
                <Route path="*" element={<h3>404</h3>} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes