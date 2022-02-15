import {
  AlignProps,
  BorderProps,
  ColorProps,
  HeightProps,
  MarginProps,
  MaxAndMinProps,
  PaddingProps,
  RadiusProps,
  WidthProps
} from '@xprog/prensa-css-engine/props'
import { ReactNode } from 'react'

export interface BlockProps extends
  AlignProps,
  BorderProps,
  MarginProps,
  MaxAndMinProps,
  PaddingProps
  {
    children: ReactNode;
    color?: ColorProps['$color'];
    bgColor?: ColorProps['$bgColor'];
    height?: HeightProps['$height'];
    radius?: RadiusProps['$radius'];
    width: WidthProps['$width'];
  }

export interface StyledBlockProps extends
  AlignProps,
  BorderProps,
  ColorProps,
  HeightProps,
  MarginProps,
  MaxAndMinProps,
  PaddingProps,
  RadiusProps,
  WidthProps
  {
    children: ReactNode;
  }