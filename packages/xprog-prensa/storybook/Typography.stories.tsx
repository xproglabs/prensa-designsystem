import React from 'react'

import { Typography } from '../primitives/Typography/index'
import { PrensaThemeProvider } from '../providers/PrensaThemeProvider'
import theme from '../tokens/theme.json'

export default { title: 'PrensaDS/Typography', component: Typography }

export const Variants = () => {
  return (
    <PrensaThemeProvider>
      {Object.keys(theme.fontSizes).map((name: any) => (
        <Typography key={name} variant={name}>
          {name} variant
        </Typography>
      ))}
    </PrensaThemeProvider>
  )
}

export const FontSize = () => {
  return (
    <PrensaThemeProvider>
      {Object.keys(theme.fontSizes).map((name) => (
        <Typography key={name} css={{ fontSize: `$${name}` }}>
          {name} fontSize
        </Typography>
      ))}
    </PrensaThemeProvider>
  )
}

export const LineHeight = () => {
  return (
    <PrensaThemeProvider>
      {Object.keys(theme.lineHeights).map((name) => (
        <Typography key={name} css={{ lineHeight: `$${name}` }}>
          {name} lineHeight
        </Typography>
      ))}
    </PrensaThemeProvider>
  )
}

export const FontWeight = () => {
  return (
    <PrensaThemeProvider>
      {Object.keys(theme.fontWeights).map((name) => (
        <Typography key={name} css={{ fontWeight: `$${name}` }}>
          {name} fontWeight
        </Typography>
      ))}
    </PrensaThemeProvider>
  )
}

export const Semantics = () => {
  return (
    <PrensaThemeProvider>
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
    </PrensaThemeProvider>
  )
}