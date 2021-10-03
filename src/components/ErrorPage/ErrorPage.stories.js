import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../styles/theme'
import { ErrorPage } from '../ErrorPage'

export default {
  title: 'ErrorPage',
  component: ErrorPage,
}

export const Default = () => {
  return(
    <ThemeProvider theme={theme}>
      <ErrorPage />
    </ThemeProvider>
  )
}
