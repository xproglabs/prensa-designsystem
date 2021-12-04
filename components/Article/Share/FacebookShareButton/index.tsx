import { IcFacebook } from 'icons'
import React from 'react'

import { FacebookAmpContainer } from './styled'
import { FacebookShareButtonProps } from './types'

const FacebookShareButton = (props: FacebookShareButtonProps) => {

  const {
    amp,
    facebookPath,
    facebookProps,
    fbappid,
    size
  } = props

  if (amp) {
    return (
      <FacebookAmpContainer
        facebookPath={facebookPath}
        $size={size}
        {...facebookProps}
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
      <IcFacebook
        width={size}
        height={size}
        color='primary1'
        {...facebookProps}
      />
    )
  }
}

export { FacebookShareButton }