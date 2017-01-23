module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "/public/js/bundle.js"
  },
  module: {
    loaders: [
      { test : /\.css$/, loader: "style!css" },
      { test : /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test : /\.json$/, loader: 'json-loader'}
    ]
  }
}