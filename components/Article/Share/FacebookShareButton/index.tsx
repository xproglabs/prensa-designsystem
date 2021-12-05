import { IcFacebook } from 'icons'
import { Block, Link } from 'prensa'
import React from 'react'

import { FacebookAmpContainer } from './styled'
import { FacebookShareButtonProps } from './types'

const FacebookShareButton = (props: FacebookShareButtonProps) => {

  const {
    amp,
    facebookPath,
    facebookProps = {},
    fbappid,
    pageUrl,
    size
  } = props

  const { mt, mr, mb, ml, ...otherProps } = facebookProps

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
          {...otherProps}
        />
      </FacebookAmpContainer>
    )
  } else {
    return (
      <Block mt={mt} mr={mr} mb={mb} ml={ml}>
        <Link path={shareUrl} target='_blank' height={size}>
          <IcFacebook
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

export { FacebookShareButton }