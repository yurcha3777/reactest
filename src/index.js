import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";

let magnifierReducer = ((state = 0, action) => {
    switch (action.type) {
        case "INC":
            return state + action.payload;
        case "DEC":
            return state - action.payload;
        default:
            return state;
    }

})

let store = createStore(magnifierReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

