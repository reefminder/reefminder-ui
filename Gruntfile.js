'use strict';

module.exports = function (grunt) {
    require('load-grunt-config')(grunt, {
        jitGrunt: {
            staticMappings: {
                'webpack-dev-server': 'grunt-webpack'
            }
        }
    });
};