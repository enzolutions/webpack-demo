var webpack = require('webpack');
var path = require('path');

var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        app: './index-antd.jsx',
        react: ['react', 'react-dom'],
        antd: ['antd'],
        /*"antd-layout": ['antd/lib/affix', 'antd/lib/row', 'antd/lib/col', 'antd/lib/icon', 'antd/lib/tooltip'],
        "antd-form": ['antd/lib/form', 'antd/lib/button', 'antd/lib/select'],*/
        moment: 'moment'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ["react","antd", "moment"],
            /*names: ["antd", "react", "moment"],*/
            /*names: ["antd-form", "antd-layout", "react", "moment"],*/
            minChunks: Infinity
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new BundleAnalyzerPlugin()
    ]
}
