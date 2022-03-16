import React from 'react'

import Block from '../../../Block'
import IcCopy from './IcCopy'
import { CopyLinkButtonProps } from './props'

const CopyLinkButton = (props: CopyLinkButtonProps) => {

  const { amp, color, mt, mr, mb, ml, size, url } = props

  function copyToClipboard() {
    navigator.clipboard.writeText(url)
  }

  if (amp) {
    return (
      <amp-iframe
        sandbox='allow-scripts'
        width={size}
        height={size}
        frameborder='0'
        src='/static/samples/files/copier.html#Testando texto que será copiado'
      >
        {/* <button class='copy-button' placeholder disabled>Copy</button> */}
        <IcCopy
          color={color}
          height={size}
          width={size}
        />
      </amp-iframe>
    )
  } else {
    return (
      <Block
        height={size}
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
        onClick={copyToClipboard}
        custom='cursor:pointer;'
      >
        <IcCopy
          color={color}
          height={size}
          width={size}
        />
      </Block>
    )
  }
}

export { CopyLinkButton }