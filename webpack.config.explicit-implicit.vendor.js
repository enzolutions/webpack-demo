var webpack = require('webpack');
var path = require('path');

module.exports = function() {
    return {
        entry: {
            moment: 'moment',
            reactdom: 'react-dom',
            app: './index-react-socket-antd.jsx'
        },
        output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: function (module) {
                    // this assumes your vendor imports exist in the node_modules directory
                    if(module.context &&
                        module.context.indexOf('react') === -1 && module.context.indexOf('react-dom') === -1 &&
                        module.context.indexOf('moment') === -1) {
                        return module.context && module.context.indexOf('node_modules') !== -1;
                    } else {
                        return 0;
                    }
                }
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'reactdom',
                //chunks: ["reactdom"],
                //minChunks: Infinity
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'moment',
                chunks: ["moment"],
                //minChunks: Infinity
            })
        ]
    };
}
