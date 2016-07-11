var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
  entry:  __dirname + "/app/App.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.json$/,
      loader: "json"
    },
    {
      test: /\.js$/,
      exclude: /node_modules/, 
      loader: 'babel',
      query: {
        presets: ['es2015','react']
      }
    },{
      test: /\.css$/,
      loader: 'style!css!postcss' }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    })
  ],
  devServer: {
    port: 2000,
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  } 
}
      