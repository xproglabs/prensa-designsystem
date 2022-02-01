import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../Block'
import Typography from '../../Typography'

export const Body = ({
  align,
  alignx,
  bodyWidth,
  children,
  hyperlinkColor,
  lg
}) => {
  const custom = `a {color: ${hyperlinkColor};}`
  return (
    <Block
      align={align}
      alignx={alignx}
      aligny='top'
      custom={custom}
      maxWidth={bodyWidth}
      px={2}
      width='calc(100% - 32px)'
      lg={lg || {
        align,
        px: '0px',
        width: '100%',
      }}
    >
      {children}
    </Block>
  )
}
Body.defaultProps = {
  align: 'column',
  alignx: 'center'
}
Body.propTypes = {
  align: PropTypes.string,
  bodyWidth: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  hyperlinkColor: PropTypes.string
}

export const TextBodyColumn = ({
  bgColor,
  children,
  lg,
  width
}) => {
  return (
    <Block
      align='column'
      aligny='top'
      bgColor={bgColor}
      lg={lg}
      width={width}>
      {children}
    </Block>
  )
}
TextBodyColumn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  width: PropTypes.string
}

export const TextBody = ({ color, children }) => 
  <Typography 
    color={color}
    dangerouslySetInnerHTML={children}
    element='h3'
    fontFamily='primary'
    fontSize='18px'
    fontWeight={700}
    lineHeight='22px'
    mb={4}
    lg={{
      fontSize: '30px',
      lineHeight: '36px'
    }}
  />

TextBody.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string
}
