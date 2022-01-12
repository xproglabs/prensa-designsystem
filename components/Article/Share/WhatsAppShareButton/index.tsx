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
    whatsappProps = {},
  } = props

  const { mt, mb, ml, ...otherProps } = whatsappProps

  const textParam = `?text=${pageUrl}`
  const shareUrl = `https://api.whatsapp.com/send${textParam}`

  if (amp) {
    return (
      <WhatsAppAmpContainer
        whatsappPath={whatsappPath}
        mt={mt}
        mr={2}
        mb={mb}
        ml={ml}
        $size={size}
      >
        <amp-social-share
          type='whatsapp'
          width={size}
          height={size}
          {...otherProps}
        />
      </WhatsAppAmpContainer>
    )
  } else {
    return (
      <Block
        height={size}
        mt={mt}
        mr={2}
        mb={mb}
        ml={ml}
      >
        <Link
          height={size}
          path={shareUrl}
          target='_blank'
        >
          <IcWhatsApp
            width={size}
            height={size}
            color='primary1'
            {...otherProps}
          />
        </Link>
      </Block>
    )
  }
}

export { WhatsAppShareButton }