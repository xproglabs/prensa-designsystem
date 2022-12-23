import { IcTelegram } from 'icons'
import { Block, Link } from 'prensa'
import React from 'react'

import { TelegramAmpContainer } from './styled'
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

  const { domain, mt, mb, mr, ml, ...otherProps } = telegramProps

  const pageUrlParam = `${domain}${pageUrl}`
  const shareUrl = `https://telegram.me/share/url?url=${pageUrlParam}`

  if (amp) {
    return (
      <TelegramAmpContainer
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
        telegramPath={telegramPath}
      >
        <amp-social-share
          data-share-endpoint={shareUrl}
          data-param-text={pageUrlParam}
          type='telegram'
          width={size}
          height={size}
        />
      </TelegramAmpContainer>
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
          ariaLabel='Compartilhar no Telegram'
          height={size}
          hoverOpacity={0.8}
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