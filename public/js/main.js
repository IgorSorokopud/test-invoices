import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

import Invoices from './components/Invoices.js';
import Products from './components/Products.js';
import Customers from './components/Customers.js';

import App from './components/App.js';

var store = createStore(reducer);

store.subscribe(function () {
    console.log('subscribe', store.getState());
});

store.dispatch({type: 'ADD_DATA', payload: 'test data'});

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/" component={App}/>
                <Route path="/products" component={Products}/>
                <Route path="/customers" component={Customers}/>
                <Route path="/invoices" component={Invoices}/>
            </div>
        </BrowserRouter>
    </Provider>,

    document.getElementById('app')
);

