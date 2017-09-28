import axios from 'axios';

export const newProducts = () => dispatch => {
    'use strict';
    axios.get('/api/products')
        .then(function (response) {
            console.log('test response', response.data);
            dispatch({type: "PRODUCTS", payload: response.data});
        });
};