import React from 'react'

import { PrensaEngine } from '../../../stitches.config'

const theme = PrensaEngine.config.theme

const ColorBlock = PrensaEngine.styled('div')

export default { title: 'Primitives/Colors', component: ColorBlock }

const textStyle = {
  backgroundColor: 'rgb(255 255 255 / 75%)',
  borderRadius: '8px',
  margin: '14px 12px',
  textAlign: 'center',
  padding: '4px',
  fontSize: '11px',
  wordBreak: 'break-word',
}

export const Default = () => {
  let lastType = ''
  return (Object.keys(theme.colors)).map(color => {
    const selfType = color.replace(/\d+/g, '')
    let isFirst = false
    if (!lastType) {
      lastType = selfType
      isFirst = true
    }

    const isLast = lastType !== selfType

    if (isLast) {
      lastType = selfType
    }

    return (
      <>
        {isLast || isFirst ?
          <ColorBlock css={{ paddingTop: '20px', clear: 'both', height: '1rem', width: '100%', margin: '10px' }}>
            {selfType}
          </ColorBlock>
          : null
        }
        <ColorBlock css={{ $$size: '90px', float: 'left', display: 'inline-block', width: '$$size', height: '$$size', backgroundColor: `$colors$${color}`, border: '1px solid #000' }}>
          <ColorBlock css={{ ...textStyle }}>
            {color}
            <br />
            {theme.colors[color]}
          </ColorBlock>
        </ColorBlock>
      </>
    )
  })
}