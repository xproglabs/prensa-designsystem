import React from 'react'

import Typography from '../Typography'
import { TextItemProps } from './types'

const TextItem = ({ color, text } : TextItemProps) => {
  return (
    <Typography 
      color={color}
      mb='4px'
      element='span'
      fontSize='14px'
      textAlign='start'
      width='100%'>
      {text}
    </Typography>
  )
}
TextItem.defaultProps = {
  color: 'neutral3',
}
export default TextItem