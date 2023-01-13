import React from 'react'

import { PrensaEngine } from '../../../prensa.default.config'
import { Typography } from '../../../primitives/Typography/index'
import { PrensaThemeProvider } from '../../../providers/PrensaThemeProvider'
import { StorybookTheme } from '../../StorybookTheme'

export default { title: 'Primitives/Typography', component: Typography }
const theme = PrensaEngine.config.theme

export const Variants = () => {
  return (
    <PrensaThemeProvider theme={StorybookTheme.className}>
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
    <PrensaThemeProvider theme={StorybookTheme.className}>
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
    <PrensaThemeProvider theme={StorybookTheme.className}>
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
    <PrensaThemeProvider theme={StorybookTheme.className}>
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
    <PrensaThemeProvider theme={StorybookTheme.className}>
      <Typography as='h1' variant='newstitle-6xl' >
        The quick brown fox
      </Typography>
      <Typography as='h1' variant='newstitle-5xl' >
        The quick brown fox
      </Typography>
      <Typography as='h2' variant='newstitle-4xl'>
        The quick brown fox
      </Typography>
      <Typography as='h3' variant='newstitle-3xl'>
        The quick brown fox
      </Typography>
      <Typography as='h4' variant='newstitle-2xl'>
        The quick brown fox
      </Typography>
      <Typography as='h5' variant='newstitle-xl'>
        The quick brown fox
      </Typography>
      <Typography as='h6' variant='newstitle-lg'>
        The quick brown fox
      </Typography>
      <Typography as='h6' variant='newstitle-md'>
        The quick brown fox
      </Typography>
      <Typography as='h6' variant='newstitle-sm'>
        The quick brown fox
      </Typography>
      <Typography as='h6' variant='newstitle-xs'>
        The quick brown fox
      </Typography>
    </PrensaThemeProvider>
  )
}