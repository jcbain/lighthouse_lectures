const path = require("path"); 
// require the plugin first it is a class 
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/newIndex.js",
  output: {
    path: path.resolve(__dirname, 'build'), 
    filename: '[contenthash].bundle.js' 
  },
  plugins: [
    // first create a public directory with your entry file
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }), // let's check out what happens when we bring in 
    // the clean webpack plugin
    new CleanWebpackPlugin() // oh yeah, no more stale files
  ]
}