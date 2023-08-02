import React from 'react'

import { CircularAnimation, SVG } from './styled'
import { CircularProgressProps } from './types'

const parseToPx = (value: number) => {
  return `${value}px`
}

export const CircularProgress = ({
  dataTestid,
  color,
  backgroundColor,
  percentage = 40,
  size = 28,
  strokeWidth = 4,
}: CircularProgressProps) => {
  const viewBox = `0 0 ${size} ${size}`
  const radius = (size - strokeWidth) / 2
  const semicircle = size / 2
  const circumference = radius * Math.PI * 2
  const dash = (percentage * circumference) / 100
  const strokeDasharray = `${dash}, ${circumference - dash}`
  const parsedStrokeWidth = parseToPx(strokeWidth)
  
  const parseTransformOrigin = () => {
    return `${parseToPx(semicircle)} ${parseToPx(semicircle)}`
  }

  return (
    <SVG
      data-testid={dataTestid}
      height={size}
      viewBox={viewBox}
      width={size}
      css={{
        '#circularProgressBackground': {
          transformOrigin: parseTransformOrigin(),
          transform: 'rotate(-90deg)'
        },
        '#circularProgressCircle': {
          animation: `${CircularAnimation} 1s linear infinite`,
          stroke: `$${color ? color : 'basicBlack'}`
        }
      }}
    >
      <circle
        id='circularProgressBackground'
        fill='none'
        stroke={backgroundColor}
        cx={semicircle}
        cy={semicircle}
        r={radius}
        strokeWidth={parsedStrokeWidth}
      />
      <circle
        id='circularProgressCircle'
        fill='none'
        cx={semicircle}
        cy={semicircle}
        r={radius}
        strokeWidth={parsedStrokeWidth}
        strokeDasharray={strokeDasharray}
        strokeLinecap='round'
      />
    </SVG>
  )
}
