import React from 'react'
import { ThemeProvider } from 'styled-components'

import PageBlock from '../../../components/PageBlock'
import TemplateContainer from '../../../components/Templates/TemplateContainer'
import { theme } from './theme'
import Linha1Data from './data/7.204.json'

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

export const Linha1 = () => {
  return (
    <TemplateContainer>
      <PageBlock {...Linha1Data} />
    </TemplateContainer>
  )
}