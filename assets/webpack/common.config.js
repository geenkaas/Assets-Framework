const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * Global webpack configuration file for all environments
 * @type {{entry: {main: string}, output: {filename: string, path: *}, module: {rules: *[]}, plugins: *[]}}
 */
module.exports = {
  entry: [
    './js/script.js', // Use a single entry point, css gets extracted later on
  ],
  output: {
    filename: 'js/bundle.min.js',
    path: path.resolve(__dirname, '../../dist'),
  },
  module: {
    rules: [
      {
        /**
         * Here we use the babel-loader with preset-env for js transpiling.
         * This allows us to write ES6 code with full compatibility on older browsers
         */
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          outputPath: '../../dist/images/',
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '../..dist/fonts/',
          },
        }],
      },
    ]
  },
  plugins: [
    /**
     * Extract the css from the js bundle
     */
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css',
    }),
    /**
     * Clean up the dist directory before each new build
     */
    //new CleanWebpackPlugin(['../../dist']),
    /**
     * QOL function to inject the current environment, fire and forget
     */
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ]),
    /**
     * Provides jQuery as global module
     */
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
  ],
};

