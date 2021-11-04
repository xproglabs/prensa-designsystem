import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import AuthorBio from '../AuthorBio'

export default {
  component: AuthorBio,
  title: 'AuthorBio',
}

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthorBio />
    </ThemeProvider>
  )
}

