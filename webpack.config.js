const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

var config = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Pug Template',
      desc: 'dunno',
      posts: [{title: "1 bla bla"}, {title: "2 bla bla"}, {title: "3 bla bla"}, {title: "4 bla bla"}],
      template: '!!pug-loader!src/index.pug',
    }),
  ]
}
module.exports = config;