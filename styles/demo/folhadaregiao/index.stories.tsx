import { find, get, map } from 'lodash'
import React from 'react'
import { ThemeProvider, StyleSheetManager } from 'styled-components'

import Block from '../../../components/Block'
import PageBlock from '../../../components/PageBlock'
import TemplateContainer from '../../../components/Templates/TemplateContainer'
import Typography from '../../../components/Typography'
import FEATURED_TOP_BLOCK from './data/featured_top_block.json'

import { preview_editable } from './editable'
import { folhadaregiao_theme as theme } from './index'

export default {
  title: 'Templates/FolhaDaRegiao',
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <StyleSheetManager disableVendorPrefixes={true}>
          <Story />
        </StyleSheetManager>
      </ThemeProvider>
    )
  ]
}
// const loadContentFromPagedata = (data=DataHomeFull) => {
//   const pagedata = get(data, 'props.content.pagedata', [])
//   const pagelist = get(data, 'props.content.pageblocks.list1', [])
//   const pageblocks = []
//   map(pagelist, (item) => {
//     const blockdata = find(pagedata, { cid: item.cid })
//     pageblocks.push(blockdata)
//   })
//   return pageblocks
// }

const domain = 'https://polopoly.hojeemdia.com.br'
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

export const FeaturedTopBlock = () => {
  return (
    <TemplateContainer
      background='neutral10'
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock
        {...FEATURED_TOP_BLOCK}
        amp={false}
        domain={domain}
        fallback_image_url={fallback_image_url}
        preview={preview_editable}
        slot_parser={slot_parser}
      />
    </TemplateContainer>
  )
}