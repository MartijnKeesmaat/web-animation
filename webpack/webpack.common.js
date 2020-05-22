const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/scripts/index.js'),
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([{ from: Path.resolve(__dirname, '../public'), to: 'public' }]),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/index.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'vectors.html',
      template: './src/vectors.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'forces.html',
      template: './src/forces.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'oscillation.html',
      template: './src/oscillation.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'particle-system.html',
      template: './src/particle-system.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'autonomous-agents.html',
      template: './src/autonomous-agents.html',
    }),
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
    ],
  },
};
