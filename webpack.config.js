var path = require("path");
module.exports = {
  entry: "./src/ts/entry.ts",
  output: {
    path: path.join(__dirname+"/dist/js"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["",".ts", ".js",".scss"]
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.scss$/, loaders: ["style", "css", "sass"]},
      {test: /\.ts$/, loader:"awesome-typescript-loader"}
    ]
  }
}
