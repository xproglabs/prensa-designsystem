import React from 'react'
import { ThemeProvider } from 'styled-components'

import PageBlock from '../../../components/PageBlock'
import TemplateContainer from '../../../components/Templates/TemplateContainer'
import firstLineData from './data/7.204.json'
import position1 from './data/position1.json'
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

const generalProps = {
  domain: 'http://localhost:3000',
}

export const HomeLinha1 = () => {
  return (
    <TemplateContainer
      background='neutral10'
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock
        {...generalProps}
        {...position1}
      />
      {/* <PageBlock {...firstLineData} /> */}
    </TemplateContainer>
  )
}