import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import AuthorProfile from '../AuthorProfile'

export default {
  title: 'AuthorProfile',
  component: AuthorProfile,
}

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthorProfile />
    </ThemeProvider>
  )
}

