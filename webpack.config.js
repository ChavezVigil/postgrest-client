var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    'postgrest-client': './lib/index.js',
    'postgrest-client.min': './lib/index.js',
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'postgrestClient',
    globalObject: 'this',
    libraryTarget: 'umd',
  },
  externals: [
    'superagent',
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      include: /\.min\.js$/
    })]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ]
};
