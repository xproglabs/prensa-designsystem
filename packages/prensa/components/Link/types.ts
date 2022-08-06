import { ColorTokens, RadiusTokens } from '@prensa_tokens'
import { AlignStyledFunctionParam0 } from 'prensa'
import { HTMLProps, ReactNode } from 'react'

import { ResponsiveHeight } from '../../styled-system/height/types'

/**
 * Prensa | Link component API
 * @description
 */
export interface LinkProps extends HTMLProps<HTMLAnchorElement> {
  align?: AlignStyledFunctionParam0['align'];
  alignx?: AlignStyledFunctionParam0['alignx'];
  aligny?: AlignStyledFunctionParam0['aligny'];
  b?: string;
  borderColor?: ColorTokens;
  borderStyle?: string;
  children?: ReactNode;
  color?: ColorTokens;
  display?: string;
  height?: ResponsiveHeight;
  href?: string;
  hoverOpacity?: number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  pt?: string | number;
  pr?: string | number;
  pb?: string | number;
  pl?: string | number;
  path?: string;
  radius?: RadiusTokens;
  textDecoration?: string;
  width?: string;
}

export type StyledLinkProps = {
  align?: AlignStyledFunctionParam0['align'];
  alignx?: AlignStyledFunctionParam0['alignx'];
  aligny?: AlignStyledFunctionParam0['aligny'];
  b?: string;
  borderColor?: ColorTokens;
  borderStyle?: string;
  children?: ReactNode;
  display?: string;
  href?: string;
  hoverOpacity?: number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  pt?: string | number;
  pr?: string | number;
  pb?: string | number;
  pl?: string | number;
  radius?: RadiusTokens;
  $color?: ColorTokens;
  $height: ResponsiveHeight;
  $textDecoration?: string;
  $width?: string;
}