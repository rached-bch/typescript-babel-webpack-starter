const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },

            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    plugins: [HtmlWebpackPluginConfig],
}