const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
// const path = require('path');
const baseConfig = require('./webpack.config.base');
// const HtmlPlugin = require('html-webpack-plugin');

const [renderer, main] = baseConfig;
/** @type {Parameters<typeof webpack>[0][0]} */
const config = {
  mode: "production",
  // devServer: {
  //   contentBase: 'dist',
  //   inline: true,
  //   overlay: true,
  //   port: 8181,
  // },
  // plugins: [
  //   new HtmlPlugin({template: path.resolve('src/index.html'), inject: false})
  // ]
};

module.exports = [
  merge(renderer, config),
  merge(main, config),
];
