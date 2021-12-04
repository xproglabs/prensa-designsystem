import { IcWhatsApp } from 'icons'
import { Block, Link } from 'prensa'
import React from 'react'

import { WhatsAppAmpContainer } from './styled'
import { WhatsAppShareButtonProps } from './types'

const WhatsAppShareButton = (props: WhatsAppShareButtonProps) => {

  const {
    amp,
    pageUrl,
    size,
    whatsappPath,
    whatsappProps,
  } = props

  // ?phone={phone_number}
  // &text={title}
  // %20{url}

  const pageUrlParam = `%20${pageUrl}`
  const shareUrl = `https://api.whatsapp.com/send${pageUrlParam}`

  if (amp) {
    return (
      <WhatsAppAmpContainer
        whatsappPath={whatsappPath}
        {...whatsappProps}
      >
        <amp-social-share
          type='whatsapp'
          width={size}
          height={size}
        />
      </WhatsAppAmpContainer>
    )
  } else {
    return (
      <Block {...whatsappProps}>
        <Link path={shareUrl} target='_blank'>
          <IcWhatsApp
            width={size}
            height={size}
            color='primary1'
          />
        </Link>
      </Block>
    )
  }
}

export { WhatsAppShareButton }