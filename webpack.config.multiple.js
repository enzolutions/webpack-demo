var webpack = require('webpack');
var path = require('path');

module.exports = function(env) {
    return {
        entry: {
            app: './index.jsx',
            moment: 'moment'
        },
        output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'moment' // Specify the common bundle's name.
            })
        ]
    }
}