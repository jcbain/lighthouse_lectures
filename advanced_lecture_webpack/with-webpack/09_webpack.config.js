// const path = require("path"); 
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  //00 i don't need these because i will specify them
  //00 in the configuration specific environment
  // mode: "development",
  // devtool: false,

  entry: "./src/newIndex.js",

  //01 the output will also be different between the two
  // output: {
  //   path: path.resolve(__dirname, 'build'), 
  //   filename: '[contenthash].bundle.js' 
  // },

  //02 devServer is only needed for dev environment
  // devServer: {
  //   port: 3000
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    // 03 i only need this for production build
    // 03 as dev just loads entirely from memory
    // new CleanWebpackPlugin()
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