import React from 'react'

import { BlockProps } from './props'
import { StyledBlock } from './styled'

const Block = ({
  bgColor,
  children,
  dangerouslySetInnerHTML,
  color,
  height,
  width,
  ...otherProps
}: BlockProps) => (
  <StyledBlock
    $bgColor={bgColor}
    $color={color}
    $height={height}
    $width={width}
    dangerouslySetInnerHTML={dangerouslySetInnerHTML ? { __html: dangerouslySetInnerHTML } : undefined}
    {...otherProps}
  >
    {dangerouslySetInnerHTML ? undefined : children}
  </StyledBlock>
)

Block.defaultProps = {
  align: 'column',
  alignx: 'left',
  aligny: 'top'
}

export default Block