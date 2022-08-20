import React from 'react'
import { withTheme } from 'styled-components'

import Block from '../Block'

interface ContainerProps {
  background?: string;
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
      width='100%'>
      <Block
        mb={mb[0]}
        mt={mt[0]}
        width='100%'
        lg={{
          maxWidth: theme.queries.xl,
          mb: mb[1],
          mt: mt[1],
          width: 'calc(100% - 32px)'
        }}>
        {children}
      </Block>
    </Block>
  )
}

const ThemedTemplateContainer: any = withTheme(TemplateContainer)
export default ThemedTemplateContainer