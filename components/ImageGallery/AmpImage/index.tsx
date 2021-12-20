import React from 'react'

const AmpImage = ({ ...otherProps }) => {
  return (
    <amp-img
      layout='responsive'
      height='360'
      width='768'
      {...otherProps}
    />
  )
}

export { AmpImage }