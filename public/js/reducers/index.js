import { combineReducers } from 'redux';
import products from './products';
import customers from './customers';
import invoices from './invoices';

export default combineReducers({
    products,
    customers,
    invoices
})