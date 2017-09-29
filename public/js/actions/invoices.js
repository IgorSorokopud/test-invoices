import axios from 'axios';

export const invoices = () => dispatch => {
    'use strict';
    axios.get('/api/invoices')
        .then(function (response) {
            dispatch({type: "INVOICES", payload: response.data});
        });
};