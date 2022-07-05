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
  WidthProps
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
  dangerouslySetInnerHTML?: { __html: Object };
  element?: TypographyElementTypes;
  fontFamily?: FontFamilyProps['$fontFamily'];
  fontSize?: FontSizeProps['$fontSize'];
  fontStyle?: FontStyleProps['$fontStyle'];
  fontWeight?: FontWeightProps['$fontWeight'];
  letterSpacing?: LetterSpacingProps['$letterSpacing'];
  opacity?: OpacityProps['$opacity'];
  textDecoration?: TextDecorationProps['$textDecoration'];
  width?: WidthProps['$width'];
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
  TextTransformProps,
  WidthProps {
  children?: TypographyProps['children'];
  dangerouslySetInnerHTML?: { __html: Object };
  element?: TypographyProps['element'];
}