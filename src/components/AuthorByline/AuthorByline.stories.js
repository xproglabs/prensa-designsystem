import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import AuthorByline from '../AuthorByline'

export default {
  component: AuthorByline,
  title: 'AuthorByline',
}

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthorByline />
    </ThemeProvider>
  )
}

