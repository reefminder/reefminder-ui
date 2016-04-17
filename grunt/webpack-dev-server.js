'use strict';

/* eslint-disable global-require */

const config = require('../webpack.config.wds');

module.exports = {
    options: {
        webpack: config,
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        hot: true,
        inline: true
    },
    start: {
        keepalive: true
    }
};