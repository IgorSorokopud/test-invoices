import axios from 'axios';

export const customers = () => dispatch => {
    'use strict';
    axios.get('/api/customers')
        .then(function (response) {
            dispatch({type: "CUSTOMERS", payload: response.data});
        });
};