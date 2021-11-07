import { Block } from 'prensa'
import React from 'react'

import { ArrowButton } from './arrows'
import { PaginationNumber } from './number'

const Pagination = () => {
  return (
    <Block align='row'>
      <ArrowButton
        direction='left'
      />
      <PaginationNumber />
      <ArrowButton
        direction='right'
      />
    </Block>  
  )
}
export default Pagination 