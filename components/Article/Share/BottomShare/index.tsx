import { get } from 'lodash'
import React from 'react'

import SectionTitle from '../../SectionTitle'
import Share from '../index'

const BottomShare = ({
  amp,
  fbappid,
  maxWidth,
  pageUrl,
  sectionTitle,
  share
}: any) => {

  const shareData = get(share, 'textBody', {})
  const color = get(share, 'color', undefined)
  const size = get(share, 'size', undefined)
  const enabled = get(shareData, 'enabled', false)
  const hasSectionTitle = get(shareData, 'sectionTitle', false)

  if (!enabled) return null

  const defaultContainerProps = {
    alignx: 'left',
    maxWidth,
    mb: 3,
    md: { alignx: 'left' }
  }

  return (
    <React.Fragment>
      {hasSectionTitle === true &&
        <SectionTitle
          element='h6'
          maxWidth={maxWidth}
          {...sectionTitle}
        >
          Compartilhar
        </SectionTitle>
      }
      <Share
        amp={amp}
        color={color}
        containerProps={defaultContainerProps}
        enabled={enabled}
        fbappid={fbappid}
        pageUrl={pageUrl}
        size={size}
        {...shareData}
      />
    </React.Fragment>
  )
}

export { BottomShare }