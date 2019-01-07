var merge = require('webpack-merge');
var common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  watch: true,
  devtool: '#eval-source-map'
  // devServer: {
  //   // proxy: {
  //   //   '**': {
  //   //     context:['/index','/projects/index/'],
  //   //     target: 'http://nm.local',
  //   //     changeOrigin: true,
  //   //   }
  //   // }
  // }
});
