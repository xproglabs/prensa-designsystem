import { Icon } from 'prensa'
import React from 'react'

import { IconProps } from './types'

export const IcRightPagination = ({ color }: IconProps) => {
  return (
    <Icon
      color={color}
      height='12px'
      viewBox='0 0 10 12'
      width='12px'
    >
      <path d="M8.0493 5.474L0.759297 9.281V7.346C0.759297 7.208 0.795297 7.082 0.867297 6.968C0.939297 6.854 1.0533 6.755 1.2093 6.671L3.7653 5.285C3.9153 5.201 4.0773 5.135 4.2513 5.087C4.4313 5.033 4.6173 4.982 4.8093 4.934C4.6173 4.886 4.4313 4.835 4.2513 4.781C4.0773 4.721 3.9153 4.649 3.7653 4.565L1.2093 3.188C1.0533 3.104 0.939297 3.005 0.867297 2.891C0.795297 2.771 0.759297 2.642 0.759297 2.504V0.569L8.0493 4.385V5.474Z" />
    </Icon>
  )
}