import React from 'react'

import { Block } from '../Block'
import { TabListProps } from './types'

export const TabList: React.FC<TabListProps> = props => {
  const tabsid = props['data-tabs-id']
  return (
    <Block
      className='pds-TabList-container'
      css={{ align: ['row', 'left', 'middle'], ...props.css?.tabList }}
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