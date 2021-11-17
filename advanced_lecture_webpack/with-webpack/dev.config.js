const path = require("path"); 
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.config")

module.exports = merge(common,{
  mode: "development",
  devtool: false,
  devServer: {
    port: 3000
  }
})