import { IcTwitter } from 'icons'
import { Block, Link } from 'prensa'
import React from 'react'

import { TwitterAmpContainer } from './styled'
import { TwitterShareButtonProps } from './types'

const TwitterShareButton = (props: TwitterShareButtonProps) => {

  const {
    amp,
    size,
    pageUrl,
    twitterPath,
    twitterProps
  } = props

  // &url={url}
  // &text={title}

  const pageUrlParam = `url=${pageUrl}`
  const shareUrl = `https://twitter.com/intent/tweet?${pageUrlParam}`

  if (amp) {
    return (
      <TwitterAmpContainer
        twitterPath={twitterPath}
        {...twitterProps}
      >
        <amp-social-share
          type='twitter'
          width={size}
          height={size}
        />
      </TwitterAmpContainer>
    )
  } else {
    return (
      <Block {...twitterProps}>
        <Link path={shareUrl} target='_blank'>
          <IcTwitter
            width={size}
            height={size}
            color='primary1'
          />
        </Link>
      </Block>
    )
  }
}

export { TwitterShareButton }