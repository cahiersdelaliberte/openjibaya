var path = require('path');
var webpack = require('webpack'),
	prefix = require('postcss-prefix-selector'),
	autoprefixer = require('autoprefixer')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
      },
      {
        test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/
      },
    ]
  },
  //add this line
  plugins: [HtmlWebpackPluginConfig]
};
