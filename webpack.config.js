// webpack.config.js
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  // The standard entry point and output config
  entry: {
    index: "./src/scripts/index.es6",
    header: "./src/views/header.html",
    footer: "./src/views/footer.html"
  },
  output: {
    path: __dirname + '/bundle',
    publicPath: '/bundle/',
    filename: "[name].js",
    chunkFilename: "[id].js"
  },
  module: {
    loaders: [
      {
        test: /\.es6?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // Extract css files
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      // Optionally extract less files
      // or any other compile-to-css language
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }
      // You could also use other loaders the same way. I. e. the autoprefixer-loader
    ]
  },
  debug: true,
  devtool: 'source-map',
  devServer: {
    hot: true,
    inline: true
  },

  // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};
