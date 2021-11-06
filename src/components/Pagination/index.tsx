import { Block } from 'prensa'
import React from 'react'

import { ArrowLeft } from './arrow-left'
import { ArrowRight } from './arrow-right'
import { PaginationNumber } from './number'

const Pagination = () => {
  return (
    <Block align='row'>
      <Block mr={3}>
        <ArrowLeft />
      </Block>
      <Block
        align='row'
        maxWidth='1280px'
        px={2}
        width='calc(100% - 32px)'>
        <PaginationNumber />
      </Block>
      <Block ml={2}>
        <ArrowRight />
      </Block>
    </Block>  
  )
}
export default Pagination 