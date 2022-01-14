import { ColorTokens } from '@prensa_tokens'
import { ReactNode } from 'react'
import { ReactHTMLElement } from 'react'

import { ResponsiveHeight } from '../../styled-system/height/types'

/**
 * Prensa | Link component API
 * @description
 */
export interface LinkProps extends ReactHTMLElement<HTMLAnchorElement> {
  children: ReactNode;
  color?: ColorTokens;
  height?: ResponsiveHeight;
  href?: string;
  hoverOpacity?: number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  path?: string;
  textDecoration?: string;
  width?: string;
}

export type StyledLinkProps = {
  children: ReactNode;
  href: string;
  $height: ResponsiveHeight;
  hoverOpacity?: number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  $color?: ColorTokens;
  $textDecoration?: string;
  $width?: string;
}