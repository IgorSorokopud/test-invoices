var webpack = require('webpack');

module.exports = {
    entry: "./public/js/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },

            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                {
                    presets:['react']
                }
            }
        ]
    }
};