import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import ErrorPage from '../ErrorPage'

export default {
  title: 'ErrorPage',
  component: ErrorPage,
}

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorPage buttonPath="/" />
    </ThemeProvider>
  )
}

export const AlignedCenter = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorPage alignx='center' />
    </ThemeProvider>
  )
}

export const AlignedRight = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorPage alignx='right' />
    </ThemeProvider>
  )
}
