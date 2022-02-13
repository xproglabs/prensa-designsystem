import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import Block from '../../components/NewBlock'

export default {
  title: 'NewBlock',
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  ]
}

export const Default = () => {
  return (
    <Block
      align='column'
      alignx='center'
      color='white'
      bgColor='neutral1'
      height='50px'
      width='100%'
    >
      teste
    </Block>
  )
}

export const Responsive = () => {
  return (
    <Block
      align={['row', 'column']}
      alignx={['left','center']}
      color={['black', 'white']}
      bgColor={['white', 'neutral1']}
      height={['100px', '50px']}
      width={['50%', '100%']}
    >
      teste
    </Block>
  )
}