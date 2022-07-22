import React from 'react'

import { Typography } from '../primitives/Typography/index'
import { ThemeProvider } from '../providers/Theme'
import theme from '../tokens/theme.json'

export default { title: 'PrensaDS/Typography', component: Typography }

export const Variants = () => {
  return (
    <ThemeProvider>
      {Object.keys(theme.fontSizes).map((name) => (
        <Typography key={name} variant={name}>
          {name} variant
        </Typography>
      ))}
    </ThemeProvider>
  )
}

export const FontSize = () => {
  return (
    <ThemeProvider>
      {Object.keys(theme.fontSizes).map((name) => (
        <Typography key={name} css={{ fontSize: `$${name}` }}>
          {name} fontSize
        </Typography>
      ))}
    </ThemeProvider>
  )
}

export const LineHeight = () => {
  return (
    <ThemeProvider>
      {Object.keys(theme.lineHeights).map((name) => (
        <Typography key={name} css={{ lineHeight: `$${name}` }}>
          {name} lineHeight
        </Typography>
      ))}
    </ThemeProvider>
  )
}

export const FontWeight = () => {
  return (
    <ThemeProvider>
      {Object.keys(theme.fontWeights).map((name) => (
        <Typography key={name} css={{ fontWeight: `$${name}` }}>
          {name} fontWeight
        </Typography>
      ))}
    </ThemeProvider>
  )
}

export const Semantics = () => {
  return (
    <ThemeProvider>
      <Typography as='h1' variant='default-heading-2xl' >
        The quick brown fox
      </Typography>
      <Typography as='h2' variant='default-heading-xl'>
        The quick brown fox
      </Typography>
      <Typography as='h3' variant='default-heading-lg'>
        The quick brown fox
      </Typography>
      <Typography as='h4' variant='default-heading-md'>
        The quick brown fox
      </Typography>
      <Typography as='h5' variant='default-heading-sm'>
        The quick brown fox
      </Typography>
      <Typography as='h6' variant='default-heading-xs'>
        The quick brown fox
      </Typography>
    </ThemeProvider>
  )
}