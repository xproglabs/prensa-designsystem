import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../Block'
import Typography from '../../Typography'

export const Paragraph = ({ color, children }) => 
  <Typography 
    color={color}
    dangerouslySetInnerHTML={children}
    element='p'
    fontFamily='primary'
    fontSize='14px'
    lineHeight='18px'
    mb={2}
    lg={{
      fontSize: '18px',
      lineHeight: '22px'
    }} 
  />

Paragraph.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string
}

export const Row = ({ children }) => 
  <Block
    width='100%'>
    {children}
  </Block>

Row.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}