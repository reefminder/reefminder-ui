'use strict';

/* eslint-env node */
/* eslint-disable prefer-template  */

const path = require('path');

const webpack = require('webpack');
const gitBranch = require('git-branch');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extendConfig = require('./webpack.config.base');
const pkg = require('./package.json');

module.exports = extendConfig({
    debug: true,
    devtool: '#source-map',
    pathinfo: true,
    entry: [
        `webpack-dev-server/client?http://localhost:8080`,
        'webpack/hot/only-dev-server',
        './reefminder.jsx'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: [
                    'react-hot'
                ]
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            VERSION: `"${pkg.version}-dev (${gitBranch.sync()})"`,
            DEVELOPMENT_MODE: true,
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new HtmlWebpackPlugin({
            template: '../assets/index.html',
            title: `${pkg.name} ${pkg.version}-dev-hot (${gitBranch.sync()})`,
            favicon: '../assets/favicon.ico',
            environment: 'development'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.Tether": 'tether'
        })
    ]
});
