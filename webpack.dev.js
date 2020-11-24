const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist/'),
    open: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      // CSS, PostCSS, and Sass
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ]
  }
});
