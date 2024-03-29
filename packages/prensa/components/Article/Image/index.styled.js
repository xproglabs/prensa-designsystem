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
  px,
  py,
  widthBox
}) => 
  <Block
    bgColor='neutral9'
    px={px[0]}
    py={py[0]}
    width={widthBox[0]}
    lg={{
      px: px[1],
      py: py[1],
      width: widthBox[1]
    }}>
    {children}
  </Block>

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