const path = require("path"); // 

module.exports = {
  mode: "development", // unminify
  devtool: false, // this will get rid of those evals so we can see our code
  // a bit more like we are used to
  entry: "./src/newIndex.js"
}