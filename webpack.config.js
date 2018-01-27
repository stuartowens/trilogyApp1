var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');
var NODE_MOD = path.resolve(__dirname, 'node_modules')


var config = {
  entry: APP_DIR + '/index.jsx',
  module: {
    resolveLoader: {
      root: NODE_MOD,
      moduleTemplates: ['*-loader']
    },
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        include: [APP_DIR,NODE_MOD],
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2|svg)(\?.*)?$/,
        include: [APP_DIR, NODE_MOD],
        loader: 'file',
        query: {
          name: 'static/media/[name].[ext]'
        }
      },
      // {
      //   test: /\.svg$/,
      //   include: [APP_DIR, NODE_MOD],
      //   loader: 'svg',
      //   query: {
      //     name: 'static/media/[name].[ext]'
      //   }
      // },
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;
