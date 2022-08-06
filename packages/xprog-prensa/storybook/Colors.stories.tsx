import React from 'react'

import { PrensaEngine } from '../prensa.default.config'
import { Block } from '../primitives/Block'
import tokens from '../tokens/theme.json'

export default { title: 'PrensaDS/Colors', component: Block }

const ColorBlock = PrensaEngine.styled('div')

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
  return (Object.keys(tokens.colors)).map(color => {
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
          <ColorBlock css={{ height: '1rem', width: '100%', margin: '10px' }}>
            {selfType}
          </ColorBlock>
          : null
        }
        <ColorBlock css={{ $$size: '90px', display: 'inline-block', width: '$$size', height: '$$size', backgroundColor: `$colors$${color}` }}>
          <ColorBlock css={{ ...textStyle }}>
            {color}
            <br />
            {tokens.colors[color]}
          </ColorBlock>
        </ColorBlock>
      </>
    )
  })
}