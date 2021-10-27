import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import Pagination from '../Pagination'

export default {
  title: 'Pagination',
  component: Pagination,
}

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <Pagination />
    </ThemeProvider>
  )
}
