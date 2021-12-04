import { IcWhatsApp } from 'icons'
import React from 'react'

import { WhatsAppShareButtonProps } from './types'

const WhatsAppShareButton = (props: WhatsAppShareButtonProps) => {

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
        width={size}
        height={size}
        color='primary1'
        {...otherProps}
      />
    )
  }
}

export { WhatsAppShareButton }