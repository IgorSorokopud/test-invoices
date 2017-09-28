export const newProducts = () => dispatch => {
    //setTimeout(() => {
    //    console.log('I got tracks');
    //    dispatch({ type: "ADD_PRODUCTS", payload: 'new test' });
    //}, 2000)

    'use strict';

    fetch('/api/products')
        .then(function(response) {
            console.log('test response', response.json());
        });
};