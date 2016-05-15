'use strict';

/* eslint-env node */
/* eslint-disable prefer-template  */

const path = require('path');

const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    context: path.join(__dirname, 'client', 'src'),
    entry: [
        './reefminder.jsx', 'bootstrap-loader'
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'babel?presets[]=es2015,presets[]=stage-0'
                ]
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loaders: [
                    'babel?presets[]=es2015,presets[]=stage-1,presets[]=react,plugins[]=babel-plugin-transform-decorators-legacy'
                ]
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            },
            {
                test: /\.svg/,
                loader: 'svg-url-loader'
            }
        ]
    },
    postcss: [autoprefixer, precss],
    resolve: {
        root: [
            path.join(__dirname, 'client', 'src')
        ],
        extensions: ['', '.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        publicPath: '/'
    },
    externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
};

module.exports = overrides => merge.smart(config, overrides);