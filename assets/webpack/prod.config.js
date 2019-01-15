const merge = require('webpack-merge');
const baseConfig = require('./common.config.js');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
  mode: process.env.NODE_ENV,
  /**
   * TerserPlugin is the replacement of UglifyJS
   * It will mangle the code and strip it of console.logs
   */
  optimization: {
    minimizer: [new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    })]
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: false, importLoaders: 2 } },
          {
            /**
             * Postcss does the following here:
             * - Autoprefix the whole code (preset-env)
             * - Minify the css (cssnano)
             * - Discard inline and block comments
             *
             * You can add even more plugins here to fit your needs
             */
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              syntax: 'postcss-scss',
              plugins: (loader) => [
                require('postcss-preset-env')(),
                require('cssnano')(),
                require('postcss-discard-comments')()
              ]
            }
          },
          { loader: 'sass-loader', options: { sourceMap: false } },
        ],
      }
    ]
  },
  plugins: []
});
