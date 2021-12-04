import { IcFacebook } from 'icons'
import React from 'react'

const FacebookShareButton = (props) => {

  const { amp, fbappid, size, ...otherProps } = props

  if (amp) {
    return (
      <amp-social-share
        type='facebook'
        width={size}
        height={size}
        data-param-app_id={fbappid}
        {...otherProps}
      />
    )
  } else {
    return (
      <IcFacebook
        width={40}
        height={40}
        color='primary1'
        {...otherProps}
      />
    )
  }
}

export { FacebookShareButton }