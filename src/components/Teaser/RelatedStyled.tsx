import React from 'react'

import Typography from '../Typography'
import {
  RelatedProps
} from './RelatedTypes'

const Related = ({
  children,
  color,
  font_size,
  line_height
}: RelatedProps) => {
  return (
    <Typography
      color={color}
      element='h2'
      fontFamily='secondary'
      fontSize={font_size[0]}
      fontWeight={300}
      lineHeight={line_height[0]}
      lg={{
        fontSize: font_size[1],
        lineHeight: line_height[1]
      }}
      mb={2}>
      {children}
    </Typography> 
  )
}

export default Related