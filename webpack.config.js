const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

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
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                cache: true,
                sourceMap: true,
                include: /\.min\.js$/,
                terserOptions: {
                    ie8: false,
                    output: {
                        comments: false,
                    },
                },
            }),
        ],
    },
    node: {
        fs: 'empty',
    },
};

module.exports = config;