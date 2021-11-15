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
        test: /\.scss$/,
        use: ['style-loader','css-loader', 'sass-loader'] 
      }, 
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: { extensions: [".js", ".jsx"] }, // allows jsx or js not to be include in import
        // use: ['babel-loader'], // switch to expanded syntax
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // allows us to use jsx
          }
        }
  
      }
    ]
  }
}