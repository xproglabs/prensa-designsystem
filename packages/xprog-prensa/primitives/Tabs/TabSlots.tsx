import React from 'react'

import { Block } from '../Block'
import { TabSlotsProps } from './types'

export const TabSlots: React.FC<TabSlotsProps> = props => {
  const tabsid = props['data-tabs-id']
  return (
    <Block
      className='pds-TabSlots-container'
      css={props.css?.tabSlots}
    >
      {React.Children.map(props.children, (c, k) => ({
        ...c,        
        props: {
          ...c.props,
          'data-component-key': `${tabsid}-tab${k}`,
          'data-hidden': props.selected !== `${tabsid}-tab${k}`,
          selected: props.selected,
          setSelected: props.setSelected
        }
      }))}
    </Block>
  )
}