const path = require('path');
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  "stories": [
    // "../storybook/**/*.stories.@(ts|tsx|js|mdx)",
    "../storybook/Button/**/*.stories.@(ts|tsx|js|mdx)"
  ],
  "addons": [
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react"
  // webpackFinal: async (config) => {
  //   config.resolve.plugins = [
  //     new TsconfigPathsPlugin({
  //       configFile: path.resolve(__dirname, '../tsconfig.json')
  //     }),
  //   ];
  //   return config;
  // },
};
