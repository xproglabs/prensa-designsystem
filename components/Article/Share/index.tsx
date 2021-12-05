import { Block } from 'prensa'
import React from 'react'

import { FacebookShareButton } from './FacebookShareButton'
import { TwitterShareButton } from './TwitterShareButton'
import { ShareProps } from './types'
import { WhatsAppShareButton } from './WhatsAppShareButton'

const Share = (props: ShareProps) => {

  const {
    amp,
    pageUrl,
    size,
    fbappid,
    facebookPath,
    facebookProps,
    twitterPath,
    twitterProps,
    whatsappPath,
    whatsappProps,
  } = props

  return (
    <Block
      align='row'
      alignx='right'
      width='100%'
    >
      <FacebookShareButton
        amp={amp}
        facebookPath={facebookPath}
        facebookProps={facebookProps}
        fbappid={fbappid}
        pageUrl={pageUrl}
        size={size}
      />
      <TwitterShareButton
        amp={amp}
        pageUrl={pageUrl}
        twitterPath={twitterPath}
        twitterProps={twitterProps}
        size={size}
      />
      <WhatsAppShareButton
        amp={amp}
        pageUrl={pageUrl}
        whatsappPath={whatsappPath}
        whatsappProps={whatsappProps}
        size={size}
      />
    </Block>
  )
}

Share.defaultProps = {
  align: 'row',
  size: '24px',
  facebookPath: 'assets/facebook.svg',
  twitterPath: 'assets/twitter.svg',
  whatsappPath: 'assets/whatsapp.svg'
}

export default Share