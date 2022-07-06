import PropTypes from 'prop-types'
import React from 'react'

import Typography from '../../Typography'

export const TextBody = ({ color, children }) => (
  <Typography
    color={color}
    dangerouslySetInnerHTML={{ __html: children }}
    element='h3'
    fontFamily='primary'
    fontSize={['18px', '30px']}
    fontWeight={700}
    lineHeight={['22px', '36px']}
    mb={4}
  />
)

TextBody.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string
}
