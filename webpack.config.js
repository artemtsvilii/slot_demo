const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
   context: __dirname + '/src',
   entry: './js/index.js',
   module: {
      rules: [
         {
            test: /\.js?$/,
            exclude: /(node_modules|dist)/,
            use: ['babel-loader']
         },
         {
            test: /\.scss$/,
            use: [
               {
                  loader: 'style-loader'
               },
               {
                  loader: 'css-loader',
                  query: {
                     modules: true,
                     localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
                  }
               },
               {
                  loader: 'postcss-loader'
               },
               {
                  loader: 'sass-loader'
               }
            ]
         }
      ]
   },
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js'
   }
};