import React from 'react'
import { withTheme } from 'styled-components'

import Block from '../components/Block'

const TemplatesContainer = ({
  children,
  mb = [0, 0],
  theme
}) => {
  return (
    <Block
      align='column'
      alignx='center'
      width='100%'>
      <Block
        lg={{ mb: mb[1] }}
        maxWidth={theme.queries.xl}
        mb={mb[0]}
        width='calc(100% - 32px)'
      >
        {children}
      </Block>
    </Block>
  )
}

export default withTheme(TemplatesContainer)