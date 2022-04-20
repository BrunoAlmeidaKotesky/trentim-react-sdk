const webpackDevConfig = require('../webpack.dev.config');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = ({config}) => {
  config.module.rules = webpackDevConfig.module.rules;
  config.resolve = webpackDevConfig.resolve;
  config.performance = {
    hints: false,
  };
  config.resolve.plugins = [
    ...(config.resolve.plugins || []),
    new TsconfigPathsPlugin({
      extensions: config.resolve.extensions,
    }),
  ];
  return config;
}
