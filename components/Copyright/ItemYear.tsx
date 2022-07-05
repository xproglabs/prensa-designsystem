import React from 'react'

import Typography from '../Typography'
import { TextItemProps } from './types'

const TextItemYear = ({ color } : TextItemProps) => {
  const getCurrentYear = () => {
    const data = new Date()
    return data.getFullYear()
  }
  return (
    <Typography 
      element='span'
      fontSize='12px'
      mb='4px'
      textAlign='left'
      width='100%'
      color={color}
      fontFamily='secondary'
    >
      © Copyright {getCurrentYear()}
    </Typography>
  )
}

TextItemYear.defaultProps = {
  color: 'neutral3',
}

export default TextItemYear