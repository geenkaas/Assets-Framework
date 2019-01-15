const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./common.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
  devtool: 'inline-source-map',
  mode: process.env.NODE_ENV,
  /**
   * Development assets get loaded from localhost:9000/dist
   */
  devServer: {
    inline: true,
    hot: true,
    publicPath: 'http://localhost:9000/dist/',
    contentBase: '/',
    port: 9000,
  },

  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          /**
           * Some wizardry here.
           * Postcss loader makes sure that our css is good quality. Preset-env is an autoprefixer
           */
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 2 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              syntax: 'postcss-scss',
              plugins: (loader) => [
                require('postcss-preset-env')(),
              ]
            }
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      }
    ]
  },
  /**
   * Add more plugins here if you wish, they will only fire on the development environment
   */
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
