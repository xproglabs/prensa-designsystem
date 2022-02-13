import React from 'react'

import { BlockProps } from './props'
import { StyledBlock } from './styled'

const Block = ({
  bgColor,
  children,
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
    {...otherProps}
  >
    {children}
  </StyledBlock>
)

export default Block