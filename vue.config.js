const path = require('path');

module.exports = {
  configureWebpack: {
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      library: 'AOT',
      libraryTarget: 'window',
      libraryExport: 'default',
    },
  },
};
