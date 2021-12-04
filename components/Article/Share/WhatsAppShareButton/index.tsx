import { IcWhatsApp } from 'icons'
import React from 'react'

const WhatsAppShareButton = (props) => {

  const { amp, size, ...otherProps } = props

  if (amp) {
    return (
      <amp-social-share
        type='whatsapp'
        width={size}
        height={size}
        {...otherProps}
      />
    )
  } else {
    return (
      <IcWhatsApp
        width={40}
        height={40}
        color='primary1'
        {...otherProps}
      />
    )
  }
}

export { WhatsAppShareButton }