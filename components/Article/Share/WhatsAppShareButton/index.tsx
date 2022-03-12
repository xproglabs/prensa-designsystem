import { IcWhatsApp } from 'icons'
import { Block, Link } from 'prensa'
import React from 'react'

import { WhatsAppAmpContainer } from './styled'
import { WhatsAppShareButtonProps } from './types'

const WhatsAppShareButton = (props: WhatsAppShareButtonProps) => {

  const {
    amp,
    color,
    pageUrl,
    size,
    whatsappPath,
    whatsappProps = {},
  } = props

  const { mt, mb, mr, ml, ...otherProps } = whatsappProps

  const textParam = `?text=${pageUrl}`
  const shareUrl = `https://api.whatsapp.com/send${textParam}`

  if (amp) {
    return (
      <WhatsAppAmpContainer
        whatsappPath={whatsappPath}
        mt={mt}
        mr={mr}
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
        mr={mr}
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
            color={color}
            {...otherProps}
          />
        </Link>
      </Block>
    )
  }
}

export { WhatsAppShareButton }