import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import Block from '../../components/Block'

export default {
  title: 'Block',
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
      radius='circle'
      maxWidth='200px'
    >
      teste
    </Block>
  )
}

export const Responsive = () => {
  return (
    <Block
      align={['row', 'column', 'row']}
      alignx={['left', 'center', 'right']}
      color={['black', 'white']}
      bgColor={['primary1', 'primary2']}
      height={['50px', '100px', '200px']}
      width='100%'
      maxWidth={['200px', '400px', '600px']}
    >
      teste
    </Block>
  )
}