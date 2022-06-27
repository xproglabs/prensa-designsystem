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
  children: ReactNode;
  element?: TypographyElementTypes;
}