import { find, get, map } from 'lodash'
import React from 'react'
import { ThemeProvider, StyleSheetManager } from 'styled-components'

import Block from '../../../components/Block'
import PageBlock from '../../../components/PageBlock'
import TemplateContainer from '../../../components/Templates/TemplateContainer'
import Typography from '../../../components/Typography'
import DataAdsPlaceholder from './data/7.100.json'
import DataHomeLinha1 from './data/7.153.json'
import DataHomeLinha2 from './data/7.155.json'
import DataHomeLinha3 from './data/7.161.json'
import DataListPaged from './data/7.173_paged.json'
import DATA_HOME_7030 from './data/7.173.json'
import DATA_HOME_FEAT from './data/7.174.json'
import DataHomeTimes from './data/7.181.json'
import Data7188_33 from './data/7.188_33.json'
import Data7188 from './data/7.188.json'
import DATA_HOME_30 from './data/7.204.json'
import DataTemplateColumnist_Slot100 from './data/7.223_slot100.json'
import DataTemplateColumnist_Slot30 from './data/7.223_slot30.json'
import DataTemplateColumnist_Slot7030 from './data/7.223_slot7030.json'
import DataHomeFeaturedImage100 from './data/7.483_100.json'
import DataHomeFeaturedImage33 from './data/7.483_33.json'
import DataHomeFeaturedImage from './data/7.483.json'
import Data7795 from './data/7.795.json'
import DataHomeFull from './data/home.json'
import { preview_editable } from './editable'
import { theme } from './index'

export default {
  title: 'Templates/HojeEmDia',
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <StyleSheetManager disableVendorPrefixes={true}>
          <Story/>
        </StyleSheetManager>
      </ThemeProvider>
    )
  ]
}
const loadContentFromPagedata = () => {
  const pagedata = get(DataHomeFull, 'props.content.pagedata', [])
  const pagelist = get(DataHomeFull, 'props.content.pageblocks.list1', [])
  const pageblocks = []
  map(pagelist, (item) => {
    const blockdata = find(pagedata, { cid: item.cid })
    pageblocks.push(blockdata)
  })
  return pageblocks
}

const domain = 'https://qa.hojeemdia.com.br'
const fallback_image_url = 'https://polopoly.hojeemdia.com.br/image/policy:1.880787.1638746928:1638746928/image.jpg?w=1000'

const slot_parser = (item, key) => {
  return (
    <Block
      bgColor='neutral9'
      key={key}
      mb={2}
      px={2}
      py={2}
      width='calc(100% - 32px)'>
      <Typography color='neutral8'>{item.title}</Typography>
    </Block>
  )
}
export const HomeWithAds = () => {
  return (
    <TemplateContainer
      background='neutral10'
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock
        {...DataAdsPlaceholder}
        amp={false}
        domain={domain}
        fallback_image_url={fallback_image_url}
        preview={preview_editable}
        slot_parser={slot_parser}
      />
    </TemplateContainer>
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
        amp={false}
        domain={domain}
        fallback_image_url={fallback_image_url}
        preview={preview_editable}
        slot_parser={slot_parser}
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
        amp={false}
        domain={domain}
        fallback_image_url={fallback_image_url}
        preview={preview_editable}
        slot_parser={slot_parser}
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
        amp={false}
        domain={domain}
        fallback_image_url={fallback_image_url}
        preview={preview_editable}
        slot_parser={slot_parser}
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
        amp={false}
        domain={domain}
        fallback_image_url={fallback_image_url}
        preview={preview_editable}
        slot_parser={slot_parser}
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
        amp={false}
        domain={domain}
        fallback_image_url={fallback_image_url}
        preview={preview_editable}
        slot_parser={slot_parser}
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
        amp={false}
        domain={domain}
        fallback_image_url={fallback_image_url}
        preview={preview_editable}
        slot_parser={slot_parser}
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
        amp={false}
        domain={domain}
        fallback_image_url={fallback_image_url}
        preview={preview_editable}
        slot_parser={slot_parser}
      />
    </TemplateContainer>
  )
}
export const HomeFeaturedNoImageWithRelated = () => {
  return (
    <TemplateContainer
      background='neutral10'
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock
        {...Data7795}
        amp={false}
        domain={domain}
        fallback_image_url={fallback_image_url}
        preview={preview_editable}
        slot_parser={slot_parser}
      />
    </TemplateContainer>
  )
}
export const HomeFeaturedImage = () => {
  return (
    <TemplateContainer
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock
        {...DataHomeFeaturedImage}
        amp={false}
        domain={domain}
        fallback_image_url={fallback_image_url}
        preview={preview_editable}
        slot_parser={slot_parser}
      />
      <PageBlock
        {...DataHomeFeaturedImage33}
        amp={false}
        domain={domain}
        fallback_image_url={fallback_image_url}
        preview={preview_editable}
        slot_parser={slot_parser}
      />
      <PageBlock
        {...DataHomeFeaturedImage100}
        amp={false}
        domain={domain}
        fallback_image_url={fallback_image_url}
        preview={preview_editable}
        slot_parser={slot_parser}
      />
    </TemplateContainer>
  )
}
export const UltimasNoticiasComMaisLidas = () => {
  return (
    <TemplateContainer
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock
        {...Data7188}
        amp={false}
        domain={domain}
        fallback_image_url={fallback_image_url}
        preview={preview_editable}
        slot_parser={slot_parser}
      />
      <PageBlock
        {...Data7188_33}
        amp={false}
        domain={domain}
        fallback_image_url={fallback_image_url}
        preview={preview_editable}
        slot_parser={slot_parser}
      />
    </TemplateContainer>
  )
}
export const TemplateColumnist = () => {
  return (
    <React.Fragment>
      <TemplateContainer
        mb={[2, 2]}
        mt={[2, 2]}
        background='neutral10'
      >
        <PageBlock
          {...DataTemplateColumnist_Slot100}
          amp={false}
          domain={domain}
        fallback_image_url={fallback_image_url}
          preview={preview_editable}
          slot_parser={slot_parser}
        />
      </TemplateContainer>
      <TemplateContainer
        mb={[2, 2]}
        mt={[2, 2]}
        background='neutral10'
      >
        <PageBlock
          {...DataTemplateColumnist_Slot30}
          amp={false}
          domain={domain}
        fallback_image_url={fallback_image_url}
          preview={preview_editable}
          slot_parser={slot_parser}
        />
      </TemplateContainer>
      <TemplateContainer
        mb={[2, 2]}
        mt={[2, 2]}
        background='neutral10'
      >
        <PageBlock
          {...DataTemplateColumnist_Slot7030}
          amp={false}
          domain={domain}
        fallback_image_url={fallback_image_url}
          preview={preview_editable}
          slot_parser={slot_parser}
        />
      </TemplateContainer>
    </React.Fragment>
  )
}
export const HomeListPaged = () => {
  return (
    <TemplateContainer
      background='neutral10'
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock
        {...DataListPaged}
        amp={false}
        domain={domain}
        fallback_image_url='/prensa-fallback.jpg'
        fallback_image_url={fallback_image_url}
        preview={preview_editable}
        slot_parser={slot_parser}
      />
    </TemplateContainer>
  )
}
export const HomeFull = () => {
  const items = loadContentFromPagedata()
  return (
    <TemplateContainer
      background='neutral10'
      mb={[2, 2]}
      mt={[2, 2]}>
      {map(items, (item, key) => {
        if (!item) 
          return null
        return (
          <PageBlock
            {...item}
            amp={false}
            key={key}
            domain={domain}
        fallback_image_url={fallback_image_url}
            preview={preview_editable}
            slot_parser={slot_parser}
          />
        )
      })}
    </TemplateContainer>
  )
}