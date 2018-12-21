const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
 
/**
 * @type {import('webpack').Configuration}
 */
const config = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    entry: {
        lib: './src/index.ts',
        'lib.min': './src/index.ts',
    },
    output: {
        path: path.resolve(__dirname, '_bundles'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: '',
        umdNamedDefine: true,
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },
    optimization:{
        minimizer: [
            new UglifyJsPlugin({
                parallel: true,
                sourceMap: true,
                include: /\.min\.js$/,
                uglifyOptions: {
                    ie8: false,
                    mangle: true,
                },
            }),
        ],
    },
};

module.exports = config;