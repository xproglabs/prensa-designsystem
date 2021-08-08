import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../Block'
import Typography from '../../Typography'

export const Box = ({
  children,
  mb
}) => 
  <Block
    custom={`
      img {
        width: 100%;
      }
    `}
    mb={mb[0]}
    lg={{
      mb: mb[1]
    }}
    width='100%'>
    {children}
  </Block>

Box.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  mb: PropTypes.array
}

export const BoxFeatured = ({
  children,
  mb,
  value
}) => 
  <Block
    custom={`
      background-image: url('${value}');
      background-repeat: no-repeat;
      background-size: cover;
    `}
    mb={mb[0]}
    lg={{
      mb: mb[1]
    }}
    height='100%'
    width='100%'>
    {children}
  </Block>

BoxFeatured.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  mb: PropTypes.array,
  value: PropTypes.string
}

export const SubtitleBox = ({
  children,
}) => 
  <Block
    bgColor='neutral9'
    px={3}
    py={3}
    width='calc(100% - 48px)'
    lg={{
      px: 4,
      py: 2,
      width: 'calc(100% - 64px)'
    }}>
    {children}
  </Block>

SubtitleBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  px: PropTypes.array,
  py: PropTypes.array,
  width: PropTypes.array
}

export const Subtitle = ({
  children,
  fontFamily,
  fontSize,
  lineHeight
}) => 
  <Typography 
    color='neutral4'
    dangerouslySetInnerHTML={children}
    element="p"
    fontFamily={fontFamily}
    fontSize={fontSize[0]}
    lineHeight={lineHeight[0]}
    lg={{
      fontSize: fontSize[1],
      lineHeight: lineHeight[1]
    }}
  />

Subtitle.propTypes = {
  children: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array
}