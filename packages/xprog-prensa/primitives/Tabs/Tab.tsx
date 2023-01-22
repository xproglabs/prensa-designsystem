import React from 'react'

import { Button } from '../Button'
import { TabProps } from './types'

export const Tab: React.FC<TabProps> = props => {
  return (
    <Button
      variant='ghost'
      className='pds-Tab-container'
      data-component-key={props['data-component-key']}
      data-selected={props['data-hidden']}
      onClick={() => props.setSelected && props.setSelected(props['data-component-key'])}
      roundedCorners='unset'
      css={{
        button: {
          borderLeft: 'unset',
          borderRight: 'unset',
          borderBottom: '3px solid $basicWhite',
          '&[data-selected=false]': { borderBottom: '3px solid $brandNeutral500' },
          ...props.css?.tab
        }
      }}
    >
      {props.children}
    </Button>
  )
}