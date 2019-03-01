import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import {applyMiddleware, createStore} from "redux"
import rootReducer from "./reducers";
import middleware from "./middleware"

import App from './components/app';

const store = createStore(rootReducer, {}, applyMiddleware(middleware));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
