import React from 'react'

import Block from '../../NewBlock'
import RenderSlot from '../../RenderSlot'
import { RenderSlotProps } from '../../RenderSlot/types'

type GridRelatedProps = RenderSlotProps & {
  enabled: boolean;
  maxWidth: string;
}

const GridRelated = ({ enabled, maxWidth, ...otherProps }: GridRelatedProps) => {

  if (!enabled) return null
  
  return (
    <Block maxWidth={maxWidth}>
      <RenderSlot {...otherProps} />
    </Block>
  )
}

GridRelated.defaultProps = {
  enabled: true,
  maxWidth: '768px'
}

export { GridRelated }