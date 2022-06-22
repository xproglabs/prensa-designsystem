import { IcLinkedin } from 'icons'
import { Link } from 'prensa'
import React from 'react'

import Block from '../../../NewBlock'
import { LinkedinAmpContainer } from './styled'
import { LinkedinShareButtonProps } from './types'

const LinkedinShareButton = (props: LinkedinShareButtonProps) => {

  const {
    amp,
    color,
    size,
    pageUrl,
    linkedinPath,
    linkedinProps = {}
  } = props

  const { mb, mt, mr, ml, ...otherProps } = linkedinProps

  const pageUrlParam = `?url=${pageUrl}`
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/${pageUrlParam}` 

  if (amp) {
    return (
      <LinkedinAmpContainer
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
        linkedinPath={linkedinPath}
      >
        <amp-social-share
          type='linkedin'
          height={size}
          width={size}
        />
      </LinkedinAmpContainer>
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
          <IcLinkedin
            color={color}
            height={size}
            width={size}
            {...otherProps}
          />
        </Link>
      </Block>
    )
  }
}

export { LinkedinShareButton }