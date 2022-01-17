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
    <div style={{ height: 'max-content' }}>
      <Link
        color='secondary1'
        path='https://google.com.br'
        hoverOpacity={0.8}
        textDecoration='unset'
        mb={1}
        mr={2}
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
    </div>
  )
}

export const NoPath = () => {
  return (
    <Link>
      The quick brown fox
    </Link>
  )
}

export const ResponsiveHeight = () => {
  return (
    <div style={{ height: '300px' }}>
      <Link href='https://google.com.br' height={['300px', '150px']}>
        The quick brown fox
      </Link>
    </div>
  )
}