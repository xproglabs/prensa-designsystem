import { Block } from 'prensa'
import React from 'react'

import { ArrowButton } from './arrows'
import { PaginationNumber } from './number'

const Pagination = () => {
  return (
    <Block align='row'>
      <Block mr={3}>
        <ArrowButton direction='left' />
      </Block>
      <Block
        align='row'
        maxWidth='1280px'
        px={2}
        width='calc(100% - 32px)'>
        <PaginationNumber />
      </Block>
      <Block ml={2}>
        <ArrowButton direction='right' />
      </Block>
    </Block>  
  )
}
export default Pagination 