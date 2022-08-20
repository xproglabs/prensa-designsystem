import React from 'react'
import { ThemeProvider } from 'styled-components'

import PageBlock from '../../../components/PageBlock'
import TemplateContainer from '../../../components/Templates/TemplateContainer'
import position1 from './data/position1.json'
import position10 from './data/position10.json'
import position2 from './data/position2.json'
import position3 from './data/position3.json'
import position4 from './data/position4.json'
import position5 from './data/position5.json'
import position6 from './data/position6.json'
import position7 from './data/position7.json'
import position8 from './data/position8.json'
import position9 from './data/position9.json'
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

export const Position0 = () => {
  return (
    <Container>
      <PageBlock {...generalProps} {...position1} />
      <PageBlock {...generalProps} {...position2} />
      <PageBlock {...generalProps} {...position3} />
      <PageBlock {...generalProps} {...position4} />
      <PageBlock {...generalProps} {...position5} />
      <PageBlock {...generalProps} {...position6} />
      <PageBlock {...generalProps} {...position7} />
      <PageBlock {...generalProps} {...position8} />
      <PageBlock {...generalProps} {...position9} />
      <PageBlock {...generalProps} {...position10} />
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
export const Position3 = () =>
  <Container>
    <PageBlock {...generalProps} {...position3} />
  </Container>
export const Position4 = () =>
  <Container>
    <PageBlock {...generalProps} {...position4} />
  </Container>
export const Position5 = () =>
  <Container>
    <PageBlock {...generalProps} {...position5} />
  </Container>
export const Position6 = () =>
  <Container>
    <PageBlock {...generalProps} {...position6} />
  </Container>
export const Position7 = () =>
  <Container>
    <PageBlock {...generalProps} {...position7} />
  </Container>
export const Position8 = () =>
  <Container>
    <PageBlock {...generalProps} {...position8} />
  </Container>
export const Position9 = () =>
  <Container>
    <PageBlock {...generalProps} {...position9} />
  </Container>
export const Position10 = () =>
  <Container>
    <PageBlock {...generalProps} {...position10} />
  </Container>