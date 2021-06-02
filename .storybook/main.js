module.exports = {
  stories: ['../components/**/*.stories.@(ts|js|mdx)', '../stories/**/*.stories.@(ts|js|mdx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    {
      name: '@storybook/addon-essentials',
    },
    {
      name: '@storybook/addon-storysource',
    },
    {
      name: '@storybook/preset-scss',
      options: {
        sassLoaderOptions: {
          implementation: require('sass')
        }
      }
    }
  ]
};
