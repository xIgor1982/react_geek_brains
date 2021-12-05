import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { profileReducer } from "./profile/reducer";
import {chatsReducer} from "./chats/reducer"
import { messagesReducer } from "./messages/reducer";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persisrConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers ({
        chats: chatsReducer,
        profilr: profileReducer,
        messages: messagesReducer
    })

const persistedReducer = persistReducer(persisrConfig, rootReducer)

export const store = createStore(
    persistedReducer,    
    composeEnhancer(applyMiddleware(thunk))
)

export const persistor = persistStore(store)

