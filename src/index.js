import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import store from './store/store.js';
import './styles/index.css';


ReactDOM.render(
    <Provider store={store}>
        <div className="index">
            <h1>Javascript Calculator</h1>
            <h3>(Whith React & MobX)</h3>
            <App />
        </div>

    </Provider>
    , document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();






