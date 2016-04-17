'use strict';

module.exports = function (grunt) {
    return {
        default: [
            'build'
        ],
        develop: [
            'clean:build',
            'connect:server',
            'webpack:development-watch'
        ],
        'develop-wds': [
            'webpack-dev-server:start'
        ],
        build: [
            'clean:build',
            'webpack:development'
        ],
        dist: [
            'clean:dist',
            'webpack:production'
        ]
    };
};