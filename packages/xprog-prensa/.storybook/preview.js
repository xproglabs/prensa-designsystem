import './main.css'
import { StorybookThemeProvider } from './StorybookThemeProvider'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen'
}

export const decorators = [
  Story => (
    <StorybookThemeProvider>
      <Story />
    </StorybookThemeProvider>
  )
]