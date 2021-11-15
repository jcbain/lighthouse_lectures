const path = require("path"); // 

module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/newIndex.js",
  output: {
    path: path.resolve(__dirname, 'build'), // name of the directory and the absolute path to it
    filename: 'bundle.js' // name of the output js bundle file
  }
}