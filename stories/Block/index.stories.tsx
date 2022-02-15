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
      color='primary1'
      height='50px'
      width='calc(100% - 4px)'
      b='2px'
      borderColor='primary1'
      borderStyle='solid'
      maxWidth='200px'
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
      maxWidth={['200px', '400px', '600px']}
    >
      teste
    </Block>
  )
}