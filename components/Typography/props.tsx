import {
  BorderProps,
  BorderStyleProps,
  ColorProps,
  CustomCSSProps,
  FontFamilyProps,
  FontSizeProps,
  FontStyleProps,
  FontWeightProps,
  LetterSpacingProps,
  LineHeightProps,
  MarginProps,
  MaxAndMinProps,
  OpacityProps,
  PaddingProps,
  TextAlignProps,
  TextDecorationProps,
  TextShadowProps,
  TextTransformProps,
} from '@xprog/prensa-css-engine/props'
import { ReactNode } from 'react'

import { TypographyElementTypes } from './types'

export interface TypographyProps extends
  BorderProps,
  BorderStyleProps,
  CustomCSSProps,
  LineHeightProps,
  MaxAndMinProps,
  MarginProps,
  PaddingProps,
  TextAlignProps,
  TextShadowProps,
  TextTransformProps {
  children?: ReactNode;
  bgColor?: ColorProps['$bgColor'];
  color?: ColorProps['$color'];
  element?: TypographyElementTypes;
  fontFamily?: FontFamilyProps['$fontFamily'];
  fontSize?: FontSizeProps['$fontSize'];
  fontStyle?: FontStyleProps['$fontStyle'];
  fontWeight?: FontWeightProps['$fontWeight'];
  letterSpacing?: LetterSpacingProps['$letterSpacing'];
  opacity?: OpacityProps['$opacity'];
  textDecoration?: TextDecorationProps['$textDecoration'];
}

export interface StyledTypographyProps extends 
  BorderProps,
  BorderStyleProps,
  ColorProps,
  CustomCSSProps,
  FontFamilyProps,
  FontSizeProps,
  FontStyleProps,
  FontWeightProps,
  LetterSpacingProps,
  LineHeightProps,
  MaxAndMinProps,
  MarginProps,
  OpacityProps,
  PaddingProps,
  TextAlignProps,
  TextDecorationProps,
  TextShadowProps,
  TextTransformProps {
  children?: TypographyProps['children'];
  element?: TypographyProps['element'];
}