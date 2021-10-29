import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App.jsx';
import HelloWorld from "./Component/HelloWorld.jsx";
import reportWebVitals from './reportWebVitals';
import {Container} from "@mui/material";

const world = "World";
const myName = "Igor";

ReactDOM.render(
    <React.StrictMode>
        <Container maxWidth="sm">
            <HelloWorld world={world}></HelloWorld>
            <App name={myName}></App>
        </Container>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
