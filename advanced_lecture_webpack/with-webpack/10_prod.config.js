const path = require("path"); 
const { merge } = require("webpack-merge");
const common = require('./09_webpack.config');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common,{
  mode: "production", // we need to change this to production
  output: {
    path: path.resolve(__dirname, 'build'),  // we will build to `build` directory
    filename: '[contenthash].bundle.js' // bring back the contenthash
  },
  plugins: [
    new CleanWebpackPlugin() // clean up stale or old builds 
  ],
})