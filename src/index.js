import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App_2 from './App_2';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { configureStore }from './App_2.js';

/*
ReactDOM.render(
    <Provider store={configureStore()}>
        <App /> 
    </Provider>,

    document.getElementById('root')
);
*/

ReactDOM.render(
    <Provider store={configureStore()}>
        <App_2 />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
