import React from 'react'
import { ThemeProvider } from 'styled-components'

import PageBlock from '../../../components/PageBlock'
import TemplateContainer from '../../../components/Templates/TemplateContainer'
import position1 from './data/position1.json'
import position2 from './data/position2.json'
import { correio_theme as theme } from './theme'

export default {
  title: 'Templates/Correio',
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

export const Position0 = () => {
  return (
    <Container>
      <PageBlock {...generalProps} {...position1} />
      <PageBlock {...generalProps} {...position2} />
    </Container>
  )
}
export const Position1 = () =>
  <Container>
    <PageBlock {...generalProps} {...position1} />
  </Container>

export const Position2 = () =>
  <Container>
    <PageBlock {...generalProps} {...position2} />
  </Container>