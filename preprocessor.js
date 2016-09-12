var babelJest = require('babel-jest');

module.exports = {
    process: function (src, filename) {
        if (filename.match(/\.jsx?$/)) {
            console.log("Out: " + filename);
            return babelJest.process(src, filename);
        } else {
            return '';
        }
    }
};