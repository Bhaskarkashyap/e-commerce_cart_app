import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import ProductContext from './Context/ProductContext';
import './index.css'
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <ProductContext>
            <App />
        </ProductContext>
    </Provider>


    , document.getElementById('root'));