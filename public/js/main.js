import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import Invoices from './components/Invoices.js';
import Products from './components/Products.js';
import Customers from './components/Customers.js';

import App from './components/App.js';
import {products} from './actions/products';
import {customers} from './actions/customers';
import {invoices} from './actions/invoices';

var store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

store.dispatch(products());
store.dispatch(customers());
store.dispatch(invoices());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/" component={App}/>
                <Route path="/products" component={Products}/>
                <Route path="/customers" component={Customers}/>
                <Route path="/invoices" component={Invoices}/>
                <Route exact path='/' component={Invoices}/>
            </div>
        </BrowserRouter>
    </Provider>,

    document.getElementById('app')
);

