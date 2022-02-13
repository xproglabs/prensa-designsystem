import {
  AlignProps,
  ColorProps,
  HeightProps,
  MarginProps,
  PaddingProps,
  WidthProps
} from '@xprog/prensa-css-engine/props'
import { ReactNode } from 'react'

export interface BlockProps extends
  AlignProps,
  MarginProps,
  PaddingProps
  {
    children: ReactNode;
    color?: ColorProps['$color'];
    bgColor?: ColorProps['$bgColor'];
    height?: HeightProps['$height'];
    width: WidthProps['$width'];
  }

export interface StyledBlockProps extends
  AlignProps,
  ColorProps,
  HeightProps,
  MarginProps,
  PaddingProps,
  WidthProps
  {
    children: ReactNode;
  }