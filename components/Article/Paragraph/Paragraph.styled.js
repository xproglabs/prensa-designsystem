import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../Block/index.ts'
import Typography from '../../Typography'

export const Paragraph = ({ color, children }) => (
  <Typography 
    color={color}
    dangerouslySetInnerHTML={{ __html: children }}
    element='p'
    fontFamily='primary'
    fontSize={['14px', '18px']}
    lineHeight={['18px', '22px']}
    mb={2}
  />
)

Paragraph.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string
}

export const Row = ({ children }) => (
  <Block width='100%'>
    {children}
  </Block>
)

Row.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}