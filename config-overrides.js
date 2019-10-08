const path = require('path');
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve.alias = {
    '@': resolve('src')
  }
  // config.module.rules.push({
  //   test: /\.scss$/,
  //   use: ['style-loader', 'css-loader', 'sass-loader'],
  // })
  return config;
}