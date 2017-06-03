var webpack = require("webpack");
var path = require('path');

module.exports = function(env) {
    return {
        entry: {
            app: './index.jsx',
        },
        output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(__dirname, 'dist')
        }
    }
}
