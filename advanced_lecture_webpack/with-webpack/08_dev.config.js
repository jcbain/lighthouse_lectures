const path = require("path"); 
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require('./09_webpack.config');
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common,{
  mode: "development",
  devtool: false,
  // this can use the default
  // output: {
  //   path: path.resolve(__dirname, 'dist'), 
  //   // filename: '[contenthash].bundle.js' 
  //   filename: 'bundle.js'
  // },
  devServer: {
    port: 3000
  }
})