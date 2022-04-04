import get from 'lodash/get'
import { Block } from 'prensa'
import React from 'react'

import { FacebookShareButton } from './FacebookShareButton'
import { LinkedinShareButton } from './LinkedinShareButton'
import { TwitterShareButton } from './TwitterShareButton'
import { ShareProps } from './types'
import { WhatsAppShareButton } from './WhatsAppShareButton'

const Share = (props: ShareProps) => {

  const {
    amp,
    enabled,
    color,
    pageUrl,
    containerProps,
    size,
    fbappid,
    facebookPath,
    facebookProps,
    linkedinPath,
    linkedinProps,
    twitterPath,
    twitterProps,
    whatsappPath,
    whatsappProps,
  } = props

  if (!enabled) {
    return null
  }

  const isLinkedinEnabled = get(linkedinProps, 'enabled', false)

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
      {isLinkedinEnabled && 
        <LinkedinShareButton 
          amp={amp}
          color={color}
          pageUrl={pageUrl}
          linkedinPath={linkedinPath}
          linkedinProps={linkedinProps}
          size={size}
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