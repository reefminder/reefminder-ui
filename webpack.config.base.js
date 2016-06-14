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
        './reefminder.jsx'
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'babel?presets[]=es2015,presets[]=stage-1'
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
                test: /\.(scss|css)$/,
                loader: 'style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]-[local]___[hash:base64:5]!sass-loader?sourceMap!toolbox-loader'
            },
            {
                test: /\.svg/,
                loader: 'svg-url-loader'
            }
        ]
    },
    postcss: [autoprefixer, precss],
    data: '@import "' + path.resolve(__dirname, 'theme/theme.scss') + '";',
    resolve: {
        root: [
            path.join(__dirname, 'client', 'src')
        ],
        extensions: ['', '.js', '.jsx', '.scss', '.css'],
        modulesDirectories: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },
    output: {
        filename: 'bundle.js',
        publicPath: '/'
    },
    toolbox: {
        theme: 'client/theme/theme.scss'
    },
    plugins: [
        new ExtractTextPlugin('bundle.css', { allChunks: true })
    ]
};

module.exports = overrides => merge.smart(config, overrides);