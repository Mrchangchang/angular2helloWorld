/**
 * Created by chang on 2017/4/10.
 */
var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: './src/main.ts',

    output: {
        filename: './bundle.js'
    },

    resolve: {
        root: [ path.join(__dirname, 'src') ],
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
};