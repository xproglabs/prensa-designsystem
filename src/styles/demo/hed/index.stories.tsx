import { get } from 'lodash'
import React from 'react'
import { Typography } from 'src'
import { ThemeProvider } from 'styled-components'

import Block from '../../../components/Block'
import PageBlock from '../../../components/PageBlock'
import TemplateContainer from '../../../components/Templates/TemplateContainer'
import DataHomeLinha1 from './data/7.153.json'
import DataHomeLinha2 from './data/7.155.json'
import DataHomeLinha3 from './data/7.161.json'
import DATA_HOME_7030 from './data/7.173.json'
import DATA_HOME_FEAT from './data/7.174.json'
import DataHomeTimes from './data/7.181.json'
import DATA_HOME_30 from './data/7.204.json'
import { theme } from './index'

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
/**
 * 
 * @param item slot item (i.e. : ads component)
 * @param key list iterator
 * @returns a mock for the element into spaceB
 */
const parseSlot = (item?: any, key?: number) => {
  return (
    <React.Fragment key={key}>
      <Block
        bgColor='neutral9'
        mb={2}
        px={2}
        py={2}
        width='calc(100% - 32px)'>
        <Typography color='neutral8'>ads.placeholder</Typography>
      </Block>
    </React.Fragment>
  )
}
export const HomeLinha1 = () => {
  return (
    <TemplateContainer
      background='neutral10'
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock
        {...DataHomeLinha1}
        parseSlot={parseSlot}
      />
    </TemplateContainer>
  )
}
export const HomeLinha2 = () => {
  return (
    <TemplateContainer
      background='neutral10'
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock
        {...DataHomeLinha2}
        parseSlot={parseSlot}
      />
    </TemplateContainer>
  )
}
export const HomeLinha3 = () => {
  return (
    <TemplateContainer
      background='neutral10'
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock
        {...DataHomeLinha3}
        parseSlot={parseSlot}
      />
    </TemplateContainer>
  )
}
export const HomeTimes = () => {
  return (
    <TemplateContainer
      background='neutral10'
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock
        {...DataHomeTimes}
        parseSlot={parseSlot}
      />
    </TemplateContainer>
  )
}
export const Home7030 = () => {
  return (
    <TemplateContainer
      background='neutral10'
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock
        {...DATA_HOME_7030}
        parseSlot={parseSlot}
      />
    </TemplateContainer>
  )
}
export const Home30 = () => {
  return (
    <TemplateContainer
      background='neutral10'
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock
        {...DATA_HOME_30}
        parseSlot={parseSlot}
      />
    </TemplateContainer>
  )
}
export const HomeFeatured = () => {
  return (
    <TemplateContainer
      background='neutral10'
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock
        {...DATA_HOME_FEAT}
        parseSlot={parseSlot}
      />
    </TemplateContainer>
  )
}

export const HomeFull = () => {
  return (
    <TemplateContainer
      background='neutral10'
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock
        {...DataHomeLinha1}
        parseSlot={parseSlot}
      />
      <PageBlock
        {...DataHomeLinha2}
        parseSlot={parseSlot}
      />
      <PageBlock
        {...DataHomeLinha3}
        parseSlot={parseSlot}
      />
      <PageBlock
        {...DataHomeTimes}
        parseSlot={parseSlot}
      />
      <PageBlock
        {...DATA_HOME_7030}
        parseSlot={parseSlot}
      />
      <PageBlock
        {...DATA_HOME_30}
        parseSlot={parseSlot}
      />
      <PageBlock
        {...DATA_HOME_FEAT}
        parseSlot={parseSlot}
      />
    </TemplateContainer>
  )
}