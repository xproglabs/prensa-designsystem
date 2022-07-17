const path = require('path');

module.exports = {
  "stories": [
    "../storybook/**/*.stories.@(ts|tsx|js|mdx)",
  ],
  "addons": [
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react"
};
