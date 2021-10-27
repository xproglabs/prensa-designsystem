import { Block } from 'prensa'
import React from 'react'

import { PaginationNumber } from './number'

const Pagination = () => {
  return (
    <Block
      align='row'
      maxWidth='1280px'
      px={2}
      width='calc(100% - 32px)'>
        <PaginationNumber />
    </Block>
  )
}
export default Pagination 