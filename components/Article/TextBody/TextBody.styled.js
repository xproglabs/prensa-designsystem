import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../Block'
import Typography from '../../Typography'

export const Body = ({
  bodyWidth,
  children,
  hyperlinkColor
}) => {

  const custom = `a {color: ${hyperlinkColor};}`

  return (
    <Block
      align='column'
      alignx='center'
      custom={custom}
      maxWidth={bodyWidth}
      px={2}
      width='calc(100% - 32px)'
      lg={{ px: '0px', width: '100%' }}
    >
      {children}
    </Block>
  )
}

Body.propTypes = {
  bodyWidth: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  hyperlinkColor: PropTypes.string
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
