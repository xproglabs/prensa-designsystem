import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../Block'

export const Container = ({ children, maxWidth }) => 
  <Block 
    align='column'
    mb={5}
    maxWidth={maxWidth}
    width='100%'
    lg={{
      align: 'row',
      custom: `
        flex-wrap: wrap;
      `
    }}>
    {children}
  </Block> 

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  maxWidth: PropTypes.string
}

export const Tag = ({ 
  b,
  borderColor,
  children, 
  color, 
  radius 
}) =>
  <Block 
    align='column'
    b={b}
    borderColor={borderColor}
    color={color}
    mr={2}
    mb={2}
    radius={radius}>
    {children}
  </Block> 
  
Tag.propTypes = {
  borderColor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  color: PropTypes.string
}
Tag.defaultProps = {
  b: '1px',
  borderColor: 'neutral6',
  color: 'neutral3',
  radius: 'alternative'
}