const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "src/index.html"),
    filename: "./index.html"
});
module.exports = {
    entry: path.join(__dirname, "src/index.js"),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                'file-loader',
              ],
            }
        ]
    },
    plugins: [htmlWebpackPlugin, new Webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
        'window.jQuery': 'jquery'
    }),],
    resolve: {
        extensions: [".js", ".jsx", "scss"],
        modules: ['node_modules'],
        alias: {
        'owl.carousel': 'owl.carousel/dist/owl.carousel.min.js'
        }
    },
    devServer: {
        port: 3001
    }
};