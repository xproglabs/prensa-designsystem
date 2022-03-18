import { IcTelegram } from 'icons'
import { Block, Link } from 'prensa'
import React from 'react'

import { LinkedinAmpContainer } from './styled'
import { TelegramShareButtonProps } from './types'

const TelegramShareButton = (props: TelegramShareButtonProps) => {

  const {
    amp,
    color,
    size,
    pageUrl,
    telegramPath,
    telegramProps = {}
  } = props

  const { mt, mb, mr, ml, ...otherProps } = telegramProps

  const pageUrlParam = `url=${pageUrl}`
  const shareUrl = `https://telegram.me/share/url?url=${pageUrlParam}`

  if (amp) {
    return (
      <LinkedinAmpContainer
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
        telegramPath={telegramPath}
      >
        <amp-social-share
          type='telegram'
          width={size}
          height={size}
          {...otherProps}
        />
      </LinkedinAmpContainer>
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
          <IcTelegram
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

export { TelegramShareButton }