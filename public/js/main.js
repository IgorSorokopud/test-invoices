import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Invoices from './components/Invoices.js';
import Products from './components/Products.js';
import Customers from './components/Customers.js';

import App from './components/App.js';

ReactDOM.render(
        <BrowserRouter>
            <div>
                <Route path="/" component={App}/>
                <Route path="/products" component={Products}/>
                <Route path="/customers" component={Customers}/>
                <Route path="/invoices" component={Invoices}/>
            </div>
        </BrowserRouter>,

    document.getElementById('app')
);