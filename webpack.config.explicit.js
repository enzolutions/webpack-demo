var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: './index-react.jsx',
        react: ['react', 'react-dom'],
        moment: 'moment'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ["react", "moment"],
            minChunks: Infinity
        })
    ]
}
