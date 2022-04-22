import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import Copyright from '../Copyright'

export default {
  title: 'Copyright',
  component: Copyright,
}

const getCurrentYear = () => {
  const data = new Date()
  return data.getFullYear()
}

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <Copyright
        textCompany='Prensa News'
        textCopyright={`© Copyright ${getCurrentYear()}`}
        textRights='Todos os direitos reservados.'
        fontFamily='secondary'
      />
    </ThemeProvider>
  )
}