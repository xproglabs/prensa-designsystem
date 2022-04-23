import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import Copyright from '../Copyright'

export default {
  title: 'Copyright',
  component: Copyright,
}

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <Copyright
        textCompany='Prensa News'
      />
    </ThemeProvider>
  )
}