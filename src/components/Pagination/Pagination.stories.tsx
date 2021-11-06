import { TemplateContainer } from 'prensa'
import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import Pagination from '.'

export default {
  title: 'Pagination',
  component: Pagination,
}

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <TemplateContainer
        background='neutral10'
        mb={[2, 2]}
        mt={[2, 2]}>
        <Pagination />
      </TemplateContainer>
    </ThemeProvider>
  )
}
