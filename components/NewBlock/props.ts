import {
  AlignProps,
  BorderProps,
  BorderStyleProps,
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
  BorderStyleProps,
  BoxShadowProps,
  CustomCSSProps,
  MarginProps,
  MaxAndMinProps,
  PaddingProps {
  bgColor?: ColorProps['$bgColor'];
  children?: ReactNode;
  color?: ColorProps['$color'];
  dangerouslySetInnerHTML?: any;
  height?: HeightProps['$height'];
  radius?: RadiusProps['$radius'];
  width?: WidthProps['$width'];
}

export interface StyledBlockProps extends
  AlignProps,
  BorderProps,
  BorderStyleProps,
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
  dangerouslySetInnerHTML?: any;
}