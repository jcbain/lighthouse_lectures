const path = require("path"); 
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
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        // test: /\.css$/,
        test: /\.scss$/,
        use: ['style-loader','css-loader', 'sass-loader'] // what does css-loader do by itself, well it converts 
        // your css to a string and converts into a module. Search the bundle for
        // your css.
        // so if css-loader converts your css files to a javascript string,
        // then style-loader actually inserts this string into a style tag
        // on the dom
      }
    ]
  }
}