import React from 'react'

import { Svg } from './styled'
import { IconProps } from './types'

const Icon = ({
  children,
  color,
  height,
  id,
  viewBox,
  width,
  ...otherProps
}: IconProps) => {

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      $color={color}
      height={height}
      viewBox={viewBox}
      id={id}
      width={width}
      {...otherProps}
    >
      {children}
    </Svg>
  )
}
Icon.defaultProps = {
  height: '24px',
  viewBox: '0 0 24 24',
  width: '24px',
}

export default Icon