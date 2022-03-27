import React from 'react'

import Block from '../NewBlock/index.tsx'

const AdPlaceholder = () => {
  const propsItem = {
    alignx: 'center',
    aligny: 'middle',
    custom: `
      background-color: #eee;
      max-width: 980px;
    `,
    fontColor: 'neutral4',
    height: '300px',
    mb: 2,
    width: '100%',
  }
  return (
    <Block {...propsItem}>
      ads_placeholder
    </Block>
  )
}

export default AdPlaceholder