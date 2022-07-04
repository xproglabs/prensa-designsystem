/* eslint-disable */
import { ColorTokens, RadiusTokens } from '@prensa_tokens'
import { AlignProps, HeightProps } from '@xprog/prensa-css-engine/props'
import { HTMLProps, ReactNode } from 'react'

/**
 * Prensa | Link component API
 * @description
 */
export interface LinkProps extends Omit<HTMLProps<HTMLAnchorElement>, 'height'> {
  align?: AlignProps['align'];
  alignx?: AlignProps['alignx'];
  aligny?: AlignProps['aligny'];
  b?: string;
  borderColor?: ColorTokens;
  borderStyle?: string;
  children?: ReactNode;
  color?: ColorTokens;
  display?: string;
  height?: HeightProps['$height'];
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
  align?: AlignProps['align'];
  alignx?: AlignProps['alignx'];
  aligny?: AlignProps['aligny'];
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
  $height: HeightProps;
  $textDecoration?: string;
  $width?: string;
}