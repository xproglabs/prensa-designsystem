import React from 'react'
import Block from '../../Block'
import RenderSlot, { RenderSlotProps } from '../../RenderSlot'

type GridRelatedProps = {
  slotProps: RenderSlotProps;
  /**
   * @description maxWidth expects a value using string with px maxWidth="768px"
   */
  maxWidth: string;
}

const GridRelated = ({ slotProps, maxWidth }: GridRelatedProps) => {
  return (
    <Block maxWidth={maxWidth}>
      <RenderSlot {...slotProps} />
    </Block>
  )
}

GridRelated.defaultProps = {
  maxWidth: '768px'
}

export { GridRelated }