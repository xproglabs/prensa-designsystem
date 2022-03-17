import { Block } from 'prensa'
import React from 'react'

import { CopyLinkButton } from './CopyLinkButton'
import { FacebookShareButton } from './FacebookShareButton'
import { TwitterShareButton } from './TwitterShareButton'
import { ShareProps } from './types'
import { WhatsAppShareButton } from './WhatsAppShareButton'

const Share = (props: ShareProps) => {

  const {
    amp,
    enabled,
    color,
    domain,
    pageUrl,
    containerProps,
    size,
    fbappid,
    copyLinkProps,
    copyLinkUrl,
    facebookPath,
    facebookProps,
    twitterPath,
    twitterProps,
    whatsappPath,
    whatsappProps,
  } = props

  if (!enabled) {
    return null
  }

  return (
    <Block
      align='row'
      alignx='left'
      width='100%'
      md={{
        align: 'row',
        alignx: 'right',
        width: '100%'
      }}
      {...containerProps}
    >
      <FacebookShareButton
        amp={amp}
        color={color}
        facebookPath={facebookPath}
        facebookProps={facebookProps}
        fbappid={fbappid}
        pageUrl={pageUrl}
        size={size}
      />
      <TwitterShareButton
        amp={amp}
        color={color}
        pageUrl={pageUrl}
        twitterPath={twitterPath}
        twitterProps={twitterProps}
        size={size}
      />
      <WhatsAppShareButton
        amp={amp}
        color={color}
        pageUrl={pageUrl}
        whatsappPath={whatsappPath}
        whatsappProps={whatsappProps}
        size={size}
      />
      {copyLinkUrl &&
        <CopyLinkButton
          amp={amp}
          color={color}
          domain={domain}
          size={size}
          url={copyLinkUrl}
          {...copyLinkProps}
        />
      }
    </Block>
  )
}

Share.defaultProps = {
  size: '24px',
  facebookPath: 'assets/facebook.svg',
  twitterPath: 'assets/twitter.svg',
  whatsappPath: 'assets/whatsapp.svg'
}

export default Share