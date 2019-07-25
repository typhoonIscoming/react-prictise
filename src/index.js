import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import './index.scss';
import store from './model/reducer'

import App from './App';

import * as serviceWorker from './serviceWorker';


// store.subscribe(() => console.log('====', store.getState()))
if (module.hot) {
    module.hot.accept();
}
// console.log('process', process.env.REACT_APP_ENV)

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
