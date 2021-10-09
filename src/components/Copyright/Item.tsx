import React from 'react'

import Typography from '../Typography'
import { TextItemProps } from './types'

const TextItem = ({ color, text } : TextItemProps) => {
  return (
    <Typography 
      color={color}
      element='span'
      fontSize='14px'
      textAlign='left'
      width='100%'>
      {text}
    </Typography>
  )
}
TextItem.defaultProps = {
  color: 'neutral3',
}
export default TextItem