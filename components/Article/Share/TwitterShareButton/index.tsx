import { IcTwitter } from 'icons'
import React from 'react'

const TwitterShareButton = (props) => {

  const { amp, size, ...otherProps } = props

  if (amp) {
    return (
      <amp-social-share
        type='twitter'
        width={size}
        height={size}
        {...otherProps}
      />
    )
  } else {
    return (
      <IcTwitter
        width={40}
        height={40}
        color='primary1'
        {...otherProps}
      />
    )
  }
}

export { TwitterShareButton }