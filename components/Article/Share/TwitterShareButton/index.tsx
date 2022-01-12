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
    twitterProps = {}
  } = props

  const { mt, mb, mr, ml, ...otherProps } = twitterProps

  const pageUrlParam = `url=${pageUrl}`
  const shareUrl = `https://twitter.com/intent/tweet?${pageUrlParam}`

  if (amp) {
    return (
      <TwitterAmpContainer
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
        twitterPath={twitterPath}
      >
        <amp-social-share
          type='twitter'
          width={size}
          height={size}
          {...otherProps}
        />
      </TwitterAmpContainer>
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
          <IcTwitter
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

export { TwitterShareButton }