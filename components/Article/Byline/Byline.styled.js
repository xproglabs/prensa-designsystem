import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../Block/index.tsx'
import Typography from '../../Typography'

export const Author = ({
  children,
  color,
  fontFamily,
  fontSize,
  lineHeight
}) => (
  <Typography 
    color={color}
    element='span'
    fontFamily={fontFamily}
    fontSize={fontSize}
    fontWeight={700}
    lineHeight={lineHeight}
  >
    {children}
  </Typography>
)

Author.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object, PropTypes.string ]),
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array
}

export const Container = ({ children }) => (
  <Block 
    align={['column', 'row']}
    alignx={['left', 'between']}
    width='100%'
  >
    {children}
  </Block>
)

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export const Content = ({ children, mb }) => (
  <Block
    align={['column', 'row', 'row']}
    aligny={['top', 'middle', 'middle']}
    mb={mb[0]}
    width='100%'
  >
    {children}
  </Block>
)

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  mb: PropTypes.array
}

export const BylineContainer = ({ children, mb }) => (
  <Block 
    mb={mb}
    width='100%'
  >
    {children}
  </Block>
)

BylineContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  mb: PropTypes.array,
}

export const BylineText = ({
  children,
  color,
  fontSize,
  fontFamily,
  lineHeight
}) => (
  <Typography 
    color={color}
    element='span'
    fontFamily={fontFamily}
    fontSize={fontSize}
    fontWeight={400}
    lineHeight={lineHeight}
  >
    {children}
  </Typography>
)

BylineText.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object, PropTypes.string ]),
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array
}