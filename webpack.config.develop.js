const merge = require('webpack-merge');
const webpack = require('webpack');
// const path = require('path');
const baseConfig = require('./webpack.config.base');
// const HtmlPlugin = require('html-webpack-plugin');

const [renderer, main] = baseConfig;
const mainConfig = {
  mode: 'development',
}
/** @type {Parameters<typeof webpack>[0][0]} */
const config = {
  mode: 'development',
  devtool: 'source-map',
  // output: {
  //   publicPath: 'http://localhost:8181/',
  // },
  devServer: {
    contentBase: 'dist',
    inline: true,
    hot: true,
    overlay: true,
    port: 8181,
  },
};

module.exports = [
  merge(renderer, config),
  merge(main, mainConfig),
];

