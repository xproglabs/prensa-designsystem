import React from 'react'
import { ThemeProvider } from 'styled-components'

import PageBlock from '../components/PageBlock'
import TemplateContainer from '../components/Templates/TemplateContainer'
import DATA_HOME_100 from '../mockup/hojeemdia/7.172.json'
import DATA_HOME_7030 from '../mockup/hojeemdia/7.173.json'
import DATA_HOME_FEAT from '../mockup/hojeemdia/7.174.json'
import DATA_HOME_30 from '../mockup/hojeemdia/7.204.json'
import { theme } from '../styles/demo/hojeemdia'

export default {
  title: 'Examples',
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story/>
      </ThemeProvider>
    )
  ]
}

export const Home100 = () => {
  return (
    <TemplateContainer
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock {...DATA_HOME_100} />
    </TemplateContainer>
  )
}
export const Home7030 = () => {
  return (
    <TemplateContainer
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock {...DATA_HOME_7030} />
    </TemplateContainer>
  )
}
export const Home30 = () => {
  return (
    <TemplateContainer
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock {...DATA_HOME_30} />
    </TemplateContainer>
  )
}
export const HomeFeatured = () => {
  return (
    <TemplateContainer
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock {...DATA_HOME_FEAT} />
    </TemplateContainer>
  )
}