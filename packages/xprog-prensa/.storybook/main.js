module.exports = {
  staticDirs: [
    './public'
  ],
  stories: [
    "**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-essentials"
  ],
  framework: "@storybook/react"
}
