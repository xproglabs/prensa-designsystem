const path = require('path');

module.exports = {
  "stories": [
    "../**/*.stories.@(ts|tsx|js|mdx)",
  ],
  "addons": [
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/react"
};
