import React from 'react'

import { PrensaEngine } from '@xprog/prensa-system'
import { Typography } from '../../../primitives/Typography/index'

export default { title: 'Primitives/Typography', component: Typography }
const theme = PrensaEngine.config.theme

export const Variants = () => {
  return (
    {
      Object.keys(theme.fontSizes).map((name: any) => (
        <Typography key={name} variant={name}>
          {name} variant
        </Typography>
      ))
    }
  )
}

export const FontSize = () => {
  return (
    {
      Object.keys(theme.fontSizes).map((name) => (
        <Typography key={name} css={{ fontSize: `$${name}` }}>
          {name} fontSize
        </Typography>
      ))
    }
  )
}

export const LineHeight = () => {
  return (
    {
      Object.keys(theme.lineHeights).map((name) => (
        <Typography key={name} css={{ lineHeight: `$${name}` }}>
          {name} lineHeight
        </Typography>
      ))
    }
  )
}

export const FontWeight = () => {
  return (
    {
      Object.keys(theme.fontWeights).map((name) => (
        <Typography key={name} css={{ fontWeight: `$${name}` }}>
          {name} fontWeight
        </Typography>
      ))
    }
  )
}

export const Semantics = () => {
  return (
    <>
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
    </>

  )
}