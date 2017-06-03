var webpack = require("webpack");
var path = require('path');

var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
var CompressionPlugin = require("compression-webpack-plugin");

var MODULE_BUILD_DIR = path.resolve(__dirname, 'dist/styles');
var MODULE_LESS_DIR = path.resolve(__dirname, '');

var ExtractTextPlugin = require("extract-text-webpack-plugin");


function getPlugins() {
    var plugins = [
        new webpack.DefinePlugin({ // <-- key to reducing React's size
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.(css)$/,
            threshold: 10240,
            minRatio: 0
        })
    ];

    plugins.push(new ExtractTextPlugin('[name].css'));

    plugins.push(
        new webpackUglifyJsPlugin({
            cacheFolder: path.resolve(__dirname, 'public/cached_uglify/'),
            debug: false,
            minimize: true,
            sourceMap: false,
            output: {
                comments: false
            },
            compressor: {
                warnings: false
            }
        })
    );

    return plugins;
}

var config = [
    {
        stats: {
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
            timings: true,
            usedExports: false,
            version: false,
            warnings: false
        },
        cache: false,
        plugins: getPlugins(),
        entry: {app: MODULE_LESS_DIR +  '/index-less.jsx'},
        output: {
            path: MODULE_BUILD_DIR,
            filename: 'app.css'
        },
        module: {
            rules: [
                {
                    test: /\.less$/i,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        //resolve-url-loader may be chained before sass-loader if necessary
                        use: ['css-loader', 'less-loader']
                    })
                },
            ]
        }
    }
];

module.exports = config;
