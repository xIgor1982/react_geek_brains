import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import {ANSWER_BOT, AUTHORS, CHATS_NAME_LIST, INITIAL_MESSAGE} from "./data/data";

ReactDOM.render(
  <React.StrictMode>
    <App
        initialMessages={INITIAL_MESSAGE}
        chatsNameList={CHATS_NAME_LIST}
        AUTHORS={AUTHORS}
        ANSWER_BOT={ANSWER_BOT}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
