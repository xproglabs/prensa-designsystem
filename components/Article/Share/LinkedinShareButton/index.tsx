import { IcLinkedin } from 'icons'
import { Block, Link } from 'prensa'
import React from 'react'

import { LinkedinAmpContainer } from './styled'
import { LinkedinShareButtonProps } from './types'

const Linkedin = (props: LinkedinShareButtonProps) => {

  const {
    amp,
    color,
    size,
    pageUrl,
    linkedinPath,
    linkedinProps = {}
  } = props

  const { mt, mb, mr, ml, ...otherProps } = linkedinProps

  const pageUrlParam = `url=${pageUrl}`
  const shareUrl = `https://www.linkedin.com/embed/feed/update/urn:li:share:${pageUrlParam}`

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
          data-param-url={pageUrlParam}
          type='linkedin'
          width={size}
          height={size}
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

export { Linkedin }