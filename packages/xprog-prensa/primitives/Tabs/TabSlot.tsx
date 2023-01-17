import React from 'react'

import { Block } from '../Block'

export const TabSlot = props => {
  return (
    <Block
      className='pds-TabSlot-container'
      data-component-key={props['data-component-key']}
      data-hidden={props['data-hidden']}      
      css={{ '&[data-hidden=true]': { display: 'none' }, ...props.css?.tabSlot }}
    >
      {props.children}
    </Block>
  )
}