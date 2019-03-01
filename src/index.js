import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {Route} from "react-router-dom";
import {Middleware, createStore} from "redux"
import rootReducer from "./reducers";
import middleware from "./middleware"

import App from './components/app';

const store = createStore(rootReducer, {}, middleware(middleware));

ReactDOM.render(
    <Provider store={store}>
        <Route>
            <App/>
        </Route>
    </Provider>,
    document.getElementById('root')
);
