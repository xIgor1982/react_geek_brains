import * as React from 'react';
import './App.css';
import { AppBar, Toolbar } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { Home } from "./Components/Home/Home";
import { Profile } from "./Components/Profile/Profile";
import Chats from "./Components/Chats/Chats";
import { store } from "./store";


function App() {


    return (
        <Provider store={store}>
            <AppBar position="sticky" color='inherit' sx={{ mb: 0.5 }}>
                <Toolbar variant="dense">
                    <ul className='app-barb-ul-style'>
                        <li><Link to="/" className={'app-link-style'}>Home</Link></li>
                        <li><Link to="/chats" className={'app-link-style'}>Chats</Link></li>
                        <li><Link to="/profile" className={'app-link-style'}>Profile</Link></li>
                    </ul>
                </Toolbar>
            </AppBar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="chats">
                    <Route index element={<Chats />} />
                    <Route path=':chatId' element={<Chats />} />
                </Route>
                <Route path="profile" element={<Profile />} />
                <Route path="*" element={<h3>404</h3>} />
            </Routes>
        </Provider>
    )
}

export default App;
