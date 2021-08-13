import React from 'react'

import Block from '../Block'

const AdPlaceholder = () => {
  const propsItem = {
    alignx: 'center',
    aligny: 'middle',
    bgColor: 'neutral8',
    fontColor: 'neutral4',
    height: '300px',
    mb: 4,
    mx: 3,
    width: 'calc(100% - 48px)',
    custom: `
      max-width: 1080px;
    `,
  }
  return (
    <Block {...propsItem}>
      ads_placeholder
    </Block>
  )
}

export default AdPlaceholder