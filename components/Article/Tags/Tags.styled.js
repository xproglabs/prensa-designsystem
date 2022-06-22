import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../NewBlock/index.tsx'

export const Container = ({ children, maxWidth }) => (
  <Block 
    align='row'
    custom='flex-wrap: wrap'
    maxWidth={maxWidth}
    width='100%'
  >
    {children}
  </Block> 
)

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  maxWidth: PropTypes.string
}

export const Tag = ({ 
  b,
  bs,
  borderColor,
  children,
  radius 
}) => (
  <Block 
    align='column'
    b={b}
    bs={bs}
    borderColor={borderColor}
    mr={2}
    mb={2}
    radius={radius}
  >
    {children}
  </Block> 
)


Tag.defaultProps = {
  b: '1px',
  bs: 'solid',
  borderColor: 'neutral6',
  radius: 'alternative'
}

Tag.propTypes = {
  b: PropTypes.string,
  bs: PropTypes.string,
  borderColor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  radius: PropTypes.string
}