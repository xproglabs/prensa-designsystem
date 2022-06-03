import React from 'react'

import { Block, Typography } from 'prensa'
import { PageTitleProps } from './types'

const PageTitle = ({
  children,
  color,
  element,
  fontSize,
  fontWeight,
  lineHeight,
  hasSelect,
  mb,
  mbTitle,
  mt,
  transform,
  px
}: PageTitleProps) => {
  
  return (
    <Block align='column' alignx='center' mb={mb} mt={mt} px={2} width='calc(100% - 32px)' >
      <Typography
        color={color}
        custom='max-width: 1280px'
        element={element}
        fontFamily='secondary'
        fontSize={fontSize}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
        mb={mbTitle}
        transform={transform}
        width='100%'>
        {children}
      </Typography>
      <Block alignx='left' maxWidth='1280px' width='100%'>
        <Block custom='select { border-color: #D7D7D7; width: 100%; height: 40px; }' width='100%' lg={{ width: '396px' }}>
          <select name='' id=''>
            <option>Item1</option>
            <option>Item2</option>
            <option>Item3</option>
          </select>
        </Block>   
      </Block>  
    </Block>
  )
}


export { PageTitle }