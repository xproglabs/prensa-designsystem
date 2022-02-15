import {
  AlignProps,
  BorderProps,
  BoxShadowProps,
  ColorProps,
  CustomCSSProps,
  HeightProps,
  MarginProps,
  MaxAndMinProps,
  PaddingProps,
  RadiusProps,
  WidthProps
} from '@xprog/prensa-css-engine/props'
import { ReactNode } from 'react'

import { BlockHTMLAttributes } from './types'

export interface BlockProps extends
  BlockHTMLAttributes,
  AlignProps,
  BorderProps,
  BoxShadowProps,
  CustomCSSProps,
  MarginProps,
  MaxAndMinProps,
  PaddingProps {
  children: ReactNode;
  color?: ColorProps['$color'];
  bgColor?: ColorProps['$bgColor'];
  height?: HeightProps['$height'];
  radius?: RadiusProps['$radius'];
  width: WidthProps['$width'];
}

export interface StyledBlockProps extends
  BlockHTMLAttributes,
  AlignProps,
  BorderProps,
  BoxShadowProps,
  ColorProps,
  CustomCSSProps,
  HeightProps,
  MarginProps,
  MaxAndMinProps,
  PaddingProps,
  RadiusProps,
  WidthProps {
  children: ReactNode;
}