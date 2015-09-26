var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './scripts/app.jsx']
  },

  output: {
    path: './public/built',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built/'
  },

  devServer: {
    contentBase: './public',
    publicPath: 'http://localhost:8080/built/'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'}
    ]
  },

  node: {
    child_process: 'empty'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  target: 'atom'
}
