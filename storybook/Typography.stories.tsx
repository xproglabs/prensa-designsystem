import React from 'react'
import { ComponentMeta } from '@storybook/react'

import { Typography } from '../primitives/Typography/index'
import { ThemeProvider } from '../providers/Theme'
import theme from '../tokens/theme.json'

export default { title: 'PrensaDS/Typography', component: Typography } as ComponentMeta<typeof Typography>;

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
