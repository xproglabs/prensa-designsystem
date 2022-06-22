import React from 'react'

import Typography from '../Typography'
import { TextItemProps } from './types'

const TextItem = ({ color, text } : TextItemProps) => {
  return (
    <Typography 
      element='span'
      fontSize='12px'
      mb='4px'
      textAlign='start'
      width='100%'
      color={color}
      fontFamily='secondary'
    >
      {text}
    </Typography>
  )
}

TextItem.defaultProps = {
  color: 'neutral3',
}

export default TextItem