var webpack = require('webpack');
var {resolve} = require('path');
var res = rel => resolve(__dirname, rel);

module.exports = function() {
    return {
        entry: {
            app: './index-react.jsx',
            vendor: ['react', 'moment'],
        },
        output: {
            filename: '[name].[hash].js',
            path: res('dist'),
        },
        /*plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'react', // Specify the common bundle's name.
                chunks: ["react"]
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'moment', // Specify the common bundle's name.
                chunks: ["moment"]
            })
        ]*/
    };
}