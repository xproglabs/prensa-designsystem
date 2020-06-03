module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-knobs/register',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
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
