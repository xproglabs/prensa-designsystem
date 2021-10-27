import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import ColumnistBio from '../ColumnistBio'

export default {
  title: 'ColumnistBio',
  component: ColumnistBio,
}

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColumnistBio />
    </ThemeProvider>
  )
}

