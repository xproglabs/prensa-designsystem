//@ts-nocheck
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { ImageGallery } from '../../components/ImageGallery'
import { theme } from '../theme'
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