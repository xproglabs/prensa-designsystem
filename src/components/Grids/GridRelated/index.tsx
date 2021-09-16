import React from 'react'
import Block from '../../Block'
import RenderSlot, { RenderSlotProps } from '../../RenderSlot'

type GridRelatedProps = RenderSlotProps & {
  enabled: boolean;
  /**
   * @description maxWidth expects a value using string with px maxWidth="768px"
   */
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
  maxWidth: '768px'
}

export { GridRelated }