import { ColorTokens } from '@prensa_tokens'
import React from 'react'
import { withTheme } from 'styled-components'

import Block from '../Block'

interface ContainerProps {
  background?: ColorTokens;
  children?: any;
  mb?: any;
  mt?: any;
  theme?: any;
}

const TemplateContainer = ({
  background,
  children,
  mb = [0, 0],
  mt = [0, 0],
  theme
}: ContainerProps) => {
  return (
    <Block
      align='column'
      alignx='center'
      bgColor={background}
      width='100%'
    >
      <Block
        mb={mb}
        mt={mt}
        maxWidth={['unset', theme.queries.xl]}
        width={['100%', 'calc(100% - 32px)']}
      >
        {children}
      </Block>
    </Block>
  )
}

export default withTheme(TemplateContainer)