import { ColorTokens } from '@prensa_tokens'
import { ReactNode } from 'react'
import { AnchorHTMLAttributes } from 'react'

/**
 * Prensa | Link component API
 * @description
 */
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  color?: ColorTokens;
  height?: string;
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
  height?: string;
  hoverOpacity?: number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  $color?: ColorTokens;
  $textDecoration?: string;
  $width?: string;
}