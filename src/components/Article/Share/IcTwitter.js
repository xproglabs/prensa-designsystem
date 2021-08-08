import PropTypes from 'prop-types'
import React from 'react'

import Icon from '../../Icon'

const IcTwitter = ({ color, height, width }) => {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" $color={color} $height={height} $width={width}>
      <path d="M30,7.33a11.92,11.92,0,0,1-3.31.9A5.65,5.65,0,0,0,29.2,5.06a11.4,11.4,0,0,1-3.63,1.39,5.74,5.74,0,0,0-9.92,3.92,6.19,6.19,0,0,0,.13,1.31A16.23,16.23,0,0,1,4,5.68a5.82,5.82,0,0,0-.78,2.9,5.75,5.75,0,0,0,2.54,4.77,5.73,5.73,0,0,1-2.59-.71v.06a5.77,5.77,0,0,0,4.6,5.64,5.68,5.68,0,0,1-1.51.19,4.88,4.88,0,0,1-1.08-.1,5.78,5.78,0,0,0,5.36,4,11.5,11.5,0,0,1-7.11,2.45A10.54,10.54,0,0,1,2,24.79a16.13,16.13,0,0,0,8.8,2.57c10.55,0,16.32-8.74,16.32-16.31,0-.26,0-.5,0-.75A11.3,11.3,0,0,0,30,7.33Z"/>
    </Icon>
  )
}

IcTwitter.defaultProps = {
  width: '24',
  height: '24',
  color: 'primary1'
}

IcTwitter.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}

export default IcTwitter