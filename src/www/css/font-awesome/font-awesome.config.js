module.exports = {
  styleLoader: require('extract-text-webpack-plugin').extract('style-loader', 'css-loader!sass-loader'),
  styles: {
    // Empty
  }
};
