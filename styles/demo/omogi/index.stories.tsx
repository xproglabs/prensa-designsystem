import React from 'react'
import { ThemeProvider } from 'styled-components'

import PageBlock from '../../../components/PageBlock'
import TemplateContainer from '../../../components/Templates/TemplateContainer'
import firstLineData from './data/7.204.json'
import { theme } from './theme'

export default {
  title: 'Templates/OMogi',
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story/>
      </ThemeProvider>
    )
  ]
}

export const HomeLinha1 = () => {
  return (
    <TemplateContainer>
      <PageBlock {...firstLineData} />
    </TemplateContainer>
  )
}