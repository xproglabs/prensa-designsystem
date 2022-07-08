import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../Block/index.ts'
import Typography from '../../Typography'

export const Box = ({
  children,
  mb
}) => (
  <Block
    custom='img{width:100%;}'
    mb={mb}
    width='100%'
  >
    {children}
  </Block>
)

Box.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  mb: PropTypes.array
}

export const BoxFeatured = ({
  children,
  mb,
  value
}) => (
  <Block
    custom={`
      background-image: url('${value}');
      background-repeat: no-repeat;
      background-size: cover;
    `}
    mb={mb}
    height='100%'
    width='100%'
  >
    {children}
  </Block>
)

BoxFeatured.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  mb: PropTypes.array,
  value: PropTypes.string
}

export const SubtitleBox = ({
  children,
  px,
  py,
  widthBox
}) => (
  <Block
    bgColor='neutral9'
    px={px}
    py={py}
    width={widthBox}
  >
    {children}
  </Block>
)

SubtitleBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  px: PropTypes.array,
  py: PropTypes.array,
  widthBox: PropTypes.array
}

export const Subtitle = ({
  children,
  fontFamily,
  fontSize,
  lineHeight
}) => (
  <Typography 
    color='neutral4'
    dangerouslySetInnerHTML={{ __html: children }}
    element="p"
    fontFamily={fontFamily}
    fontSize={fontSize}
    lineHeight={lineHeight}
  />
)

Subtitle.propTypes = {
  children: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array
}