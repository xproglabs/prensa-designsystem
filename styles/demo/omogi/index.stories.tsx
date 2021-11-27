import React from 'react'
import { ThemeProvider } from 'styled-components'

import PageBlock from '../../../components/PageBlock'
import TemplateContainer from '../../../components/Templates/TemplateContainer'
import position1 from './data/position1.json'
import position3 from './data/position3.json'
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

const Container = ({ children }) => {
  return (
    <TemplateContainer
      background='neutral10'
      mb={[2, 2]}
      mt={[2, 2]}>
      {children}
    </TemplateContainer>
  )
}

const generalProps = {
  domain: 'http://localhost:3000',
}

export const Position1 = () => {
  return (
    <Container>
      <PageBlock
        {...generalProps}
        {...position1}
      />
    </Container>
  )
}
export const Position3 = () => {
  return (
    <Container>
      <PageBlock
        {...generalProps}
        {...position3}
      />
    </Container>
  )
}