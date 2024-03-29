import { IcFacebook } from 'icons'
import { Block, Link } from 'prensa'
import React from 'react'

import { FacebookAmpContainer } from './styled'
import { FacebookShareButtonProps } from './types'

const FacebookShareButton = (props: FacebookShareButtonProps) => {

  const {
    amp,
    color,
    facebookPath,
    facebookProps = {},
    fbappid,
    pageUrl,
    size
  } = props

  const { color: specificColor, mt, mb, mr, ml, ...otherProps } = facebookProps

  const displayParam = '&display=popup'
  const fbappidParam = `?app_id=${fbappid}`
  const pageUrlParam = `&href=${pageUrl}`
  const shareUrl = `https://www.facebook.com/dialog/share${fbappidParam}${displayParam}${pageUrlParam}`

  if (amp) {
    return (
      <FacebookAmpContainer
        facebookPath={facebookPath}
        $size={size}
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
      >
        <amp-social-share
          type='facebook'
          width={size}
          height={size}
          data-param-app_id={fbappid}
        />
      </FacebookAmpContainer>
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
          ariaLabel="Compartilhar no Facebook"
          height={size}
          hoverOpacity={0.8}
          path={shareUrl}
          target='_blank'
        >
          <IcFacebook
            width={size}
            height={size}
            color={specificColor || color}
            {...otherProps}
          />
        </Link>
      </Block>
    )
  }
}

export { FacebookShareButton }