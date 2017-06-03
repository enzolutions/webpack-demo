var webpack = require('webpack');
var path = require('path');

var CompressionPlugin = require("compression-webpack-plugin");
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    /*stats: {
        assets: true,
        cached: false,
        cachedAssets: false,
        children: false,
        chunks: false,
        chunkModules: false,
        chunkOrigins: false,
        colors: false,
        depth: false,
        entrypoints: false,
        errors: true,
        errorDetails: true,
        hash: false,
        maxModules: 0,
        modules: false,
        performance: false,
        providedExports: false,
        publicPath: false,
        reasons: false,
        source: false,
        timings: false,
        usedExports: false,
        version: false,
        warnings: false
    },*/
    entry: {
        app: './index-antd.jsx',
        react: ['react', 'react-dom'],
        "antd-layout": ['antd/lib/affix', 'antd/lib/row', 'antd/lib/col', 'antd/lib/icon', 'antd/lib/tooltip'],
        "antd-form": ['antd/lib/form', 'antd/lib/button', 'antd/lib/select'],
        moment: 'moment'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ["antd-form", "antd-layout", "react", "moment"],
            minChunks: Infinity
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            sourceMap: false,
            compress: {
                drop_console: true,
                warnings: false, // Suppress uglification warnings
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                // Don't care about IE8
                screw_ie8 : true
            },
            mangle: true,
            output: {
                comments: false
            },
            exclude: [/\.min\.js$/gi] // skip pre-minified libs
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.(js|css|html)$/,
            threshold: 10240,
            minRatio: 0
        }),
        new BundleAnalyzerPlugin()
    ]
}
