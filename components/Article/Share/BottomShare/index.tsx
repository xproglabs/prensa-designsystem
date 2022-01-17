import React from 'react'

import SectionTitle from '../../SectionTitle'
import Share from '../index'

const BottomShare = ({ maxWidth, ...otherProps }: any) => {
  return (
    <React.Fragment>
      <SectionTitle maxWidth={maxWidth}>
        Compartilhar
      </SectionTitle>
      <Share 
        containerProps={{
          alignx: 'left',
          maxWidth,
          mb: 3,
          md: { alignx: 'left' }
        }}
        {...otherProps}
      />
    </React.Fragment>
  )
}

export { BottomShare }