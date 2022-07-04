import PropTypes from 'prop-types'
import React from 'react'

import Typography from '../../Typography'

export const TextBody = ({ color, children }) => (
  <Typography
    color={color}
    dangerouslySetInnerHTML={{ __html: children }}
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
)

TextBody.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string
}
