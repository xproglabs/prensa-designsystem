import React, { useState } from 'react'

import { Block } from '../Block'
import { TabsProps } from './types'

export const Tabs: React.FC<TabsProps> = props => {
  const [selectedTab, setSelectedTab] = useState(`${props.id}-tab0`)
  return (
    <Block
      className='pds-Tabs-container'
      css={props.css?.container}
    >
      {React.Children.map(props.children, (c) => ({
        ...c,
        props: {
          ...c.props,
          selected: selectedTab,
          setSelected: setSelectedTab,
          'data-tabs-id': props.id,
          css: props.css
        }
      }))}
    </Block>
  )
}