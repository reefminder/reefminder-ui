'use strict';

/* eslint-disable global-require */

const configs = {
    development: require('../webpack.config.development'),
    production: require('../webpack.config.production')
};

console.dir(configs.devel)
module.exports = {
    development: configs.development,
    production: configs.production,
    'development-watch': Object.assign({}, configs.development, {
        watch: true,
        keepalive: true
    })
};