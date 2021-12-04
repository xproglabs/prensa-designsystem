import { IcTwitter } from 'icons'
import React from 'react'

import { TwitterAmpContainer } from './styled'
import { TwitterShareButtonProps } from './types'

const TwitterShareButton = (props: TwitterShareButtonProps) => {

  const { amp, size, twitterPath, twitterProps } = props

  if (amp) {
    return (
      <TwitterAmpContainer twitterPath={twitterPath}>
        <amp-social-share
          type='twitter'
          width={size}
          height={size}
          {...twitterProps}
        />
      </TwitterAmpContainer>
    )
  } else {
    return (
      <IcTwitter
        width={size}
        height={size}
        color='primary1'
        {...twitterProps}
      />
    )
  }
}

export { TwitterShareButton }