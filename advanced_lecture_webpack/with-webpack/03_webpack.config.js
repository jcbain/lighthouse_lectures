const path = require("path"); // 

module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/newIndex.js",
  output: {
    path: path.resolve(__dirname, 'build'), 
    filename: '[contenthash].bundle.js' // [contenthash] will cash your builds content 
    //and append string to file name
  }
}