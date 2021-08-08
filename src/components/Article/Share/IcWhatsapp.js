import PropTypes from 'prop-types'
import React from 'react'

import Icon from '../../Icon'

const IcWhatsapp = ({ color, height, width }) => {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox='0 0 32 32' $color={color} $height={height} $width={width}>
      <path d="M15.43,4.24A11.69,11.69,0,0,0,4.32,15.94a11.52,11.52,0,0,0,1.27,5.27l-1.24,6a.45.45,0,0,0,.55.53l5.9-1.39a11.57,11.57,0,0,0,5,1.21,11.68,11.68,0,1,0-.39-23.34Zm7,18.13A9.17,9.17,0,0,1,11.93,24.1l-.82-.41-3.62.86.76-3.7-.4-.79A9.15,9.15,0,0,1,22.47,9.44a9.05,9.05,0,0,1,2.68,6.46A9.16,9.16,0,0,1,22.47,22.37Z"/>
      <path d="M21.67,18.44l-2.26-.65a.85.85,0,0,0-.84.22l-.55.56a.82.82,0,0,1-.9.19,11.88,11.88,0,0,1-3.89-3.44.82.82,0,0,1,.06-.91l.48-.62a.86.86,0,0,0,.11-.86l-1-2.15a.85.85,0,0,0-1.32-.31,3.83,3.83,0,0,0-1.47,2.25c-.16,1.58.52,3.58,3.09,6,3,2.78,5.35,3.14,6.89,2.77a3.87,3.87,0,0,0,2-1.77A.84.84,0,0,0,21.67,18.44Z"/>
    </Icon>
  )
}

IcWhatsapp.defaultProps = {
  width: '24',
  height: '24',
  color: 'primary1'
}

IcWhatsapp.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}

export default IcWhatsapp