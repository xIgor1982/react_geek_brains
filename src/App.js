import * as React from 'react';
import './App.css';
import { Provider } from "react-redux";
import { store } from "./store";
import MainRoutes from './Components/MainRoutes/index'


function App() {
    return (
        <Provider store={store}>
            <MainRoutes />
        </Provider>
    )
}

export default App;
