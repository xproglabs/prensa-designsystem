import { PageTitle } from 'prensa'
import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'PageTitle'
}

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageTitle
        containerProps={{
          mb: 5
        }}
        hasSelect={true}
        titleProps={{
          color: 'primary1',
          fontSize: '24px',
          fontWeight: 700,
          mb: 2,
          transform: 'uppercase'
        }}
        title='TESTE DE TÍTULO DE EDITORIA'>
      </PageTitle>
    </ThemeProvider>
  )
}