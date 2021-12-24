import { ImageGallery } from 'prensa'
import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import data from './data.json'

export default {
  title: 'ImageGallery',
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  ]
}

export const Default = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ImageGallery
        amp={false}
        items={data}
      />
    </div>
  )
}