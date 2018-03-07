const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

var config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Pug Template',
      desc: 'A very long descriptions with test and bla',
      posts: [{title: "1 bla bla"}, {title: "2 bla bla"}, {title: "3 bla bla"}, {title: "4 bla bla"}],
      template: '!!pug-loader!src/index.pug',
    }),
  ]
}
module.exports = config;