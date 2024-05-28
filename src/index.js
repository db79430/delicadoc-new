import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from '../src/redux/store/store';
import * as ReactDOM from 'react-dom';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
                <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// eslint-disable-next-line react/jsx-no-undef
reportWebVitals();
