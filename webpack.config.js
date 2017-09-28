var webpack = require('webpack');

module.exports = {
    entry: "./public/js/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    }
};