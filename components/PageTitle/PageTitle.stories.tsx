import React from 'react'

import { theme } from 'storybook/theme'
import { PageTitle } from 'prensa'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'PageTitle'
}

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageTitle
        fontSize='24px'
        color='primary1'
        mbTitle={3}
        mb={5}
        fontWeight={700}
        transform='uppercase'>
        TÍTULO EDITORIA TESTE
      </PageTitle>
    </ThemeProvider>
  )
}