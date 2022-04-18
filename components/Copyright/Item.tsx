import React from 'react'

import Typography from '../Typography'
import { TextItemProps } from './types'

const TextItem = ({ color, fontFamily, text } : TextItemProps) => {
  return (
    <Typography 
      element='span'
      fontSize='12px'
      mb='7px'
      textAlign='start'
      width='100%'
      color={color}
      fontFamily={fontFamily}
    >
      {text}
    </Typography>
  )
}

TextItem.defaultProps = {
  color: 'neutral3',
}

export default TextItem