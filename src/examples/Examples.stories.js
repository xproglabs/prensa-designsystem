import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/demo/hed'

import PageBlock from '../components/PageBlock'
import TemplateContainer from '../components/Templates/TemplateContainer'
import DataHomeLinha1 from '../mockup/hojeemdia/7.153.json'
import DataHomeLinha2 from '../mockup/hojeemdia/7.155.json'
import DataHomeLinha3 from '../mockup/hojeemdia/7.161.json'
import DATA_HOME_100 from '../mockup/hojeemdia/7.172.json'
import DATA_HOME_7030 from '../mockup/hojeemdia/7.173.json'
import DATA_HOME_FEAT from '../mockup/hojeemdia/7.174.json'
import DATA_HOME_30 from '../mockup/hojeemdia/7.204.json'

export default {
  title: 'Templates/HojeEmDia',
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
    <TemplateContainer
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock {...DataHomeLinha1} />
    </TemplateContainer>
  )
}
export const HomeLinha2 = () => {
  return (
    <TemplateContainer
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock {...DataHomeLinha2} />
    </TemplateContainer>
  )
}
export const HomeLinha3 = () => {
  return (
    <TemplateContainer
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock {...DataHomeLinha3} />
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