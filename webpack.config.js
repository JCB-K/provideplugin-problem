var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app.js',
  output: {
    filename: './bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      // index.js is a CommonJS compatible version of Angular, it just requires and
      // exports the angular module
      angular: path.resolve(__dirname, 'node_modules/angular/index.js'),
    },
  },
  plugins: [new webpack.ProvidePlugin({ angular: 'angular' })],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8081,
  },
};
