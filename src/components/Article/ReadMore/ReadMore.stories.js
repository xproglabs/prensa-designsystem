import { Meta } from '@storybook/addon-docs/blocks'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../../styles/theme'
import ReadMore from './index'

<Meta title="Article/ReadMore" />

export default {
  title: 'ReadMore',
  component: ReadMore,
}

export const Deafult = () => {
  return(
    <ThemeProvider theme={theme}>
      <ReadMore/>
    </ThemeProvider>
  )
}