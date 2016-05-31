module.exports = {
  entry: ['./src/scripts/index.es6'], // your app entry point may vary
  output: {
    path: __dirname + '/bundle',
    publicPath: '/bundle/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.es6?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  debug: true,
  devtool: 'source-map',
  devServer: {
      hot: true,
      inline: true
  }
};
