import axios from 'axios';

export const products = () => dispatch => {
    'use strict';
    axios.get('/api/products')
        .then(function (response) {
            dispatch({type: "PRODUCTS", payload: response.data});
        });
};