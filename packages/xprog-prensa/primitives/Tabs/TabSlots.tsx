import React from 'react'

import { Block } from '../Block'

export const TabSlots = props => {
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