import { IcLinkedin } from 'icons'
import { Block, Link } from 'prensa'
import React from 'react'

import { LinkedinAmpContainer } from './styled'
import { LinkedinShareButtonProps } from './types'

const LinkedinshareButton = (props: LinkedinShareButtonProps) => {

  const {
    amp,
    color,
    size,
    pageUrl,
    linkedinPath,
    linkedinProps = {}
  } = props

  const { mt, mb, mr, ml, ...otherProps } = linkedinProps

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
          {...otherProps}
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
            width={size}
            height={size}
            color={color}
            {...otherProps}
          />
        </Link>
      </Block>
    )
  }
}

export { LinkedinshareButton }