import React from 'react'

import { Svg } from './styled'
import { IconProps } from './types'

const Icon = ({
  children,
  color,
  height,
  viewBox,
  width,
  path,
  ...otherProps
}: IconProps) => {

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      $color={color}
      height={height}
      viewBox={viewBox}
      width={width}
      {...otherProps}
    >
      {children}
    </Svg>
  )
}

Icon.defaultProps = {
  color: 'neutral3',
  height: '24px',
  viewBox: '0 0 24 24',
  width: '24px',
}

export default Icon