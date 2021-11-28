import { Link } from 'prensa'
import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'Link',
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
    <Link path='https://google.com.br'>
      Testando texto com link
    </Link>
  )
}

export const StylizedLink = () => {
  return (
    <React.Fragment>
      <Link
        color='secondary1'
        path='https://google.com.br'
        hoverOpacity={0.8}
        textDecoration='unset'
      >
        Testando texto com link
      </Link>
      <Link
        color='primary1'
        path='https://google.com.br'
        hoverOpacity={0.6}
      >
        Testando texto com link
      </Link>
    </React.Fragment>
  )
}

export const NoPath = () => {
  return (
    <Link>
      The quick brown fox
    </Link>
  )
}