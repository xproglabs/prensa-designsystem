import { ColorTokens } from '@prensa_tokens'
import { ReactNode } from 'react'
import { LinkHTMLAttributes } from 'react'

/**
 * Prensa | Link component API
 * @description
 */
export interface LinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
  children: ReactNode;
  color?: ColorTokens;
  hoverOpacity?: number;
  path?: string;
  textDecoration?: string;
}

export type StyledLinkProps = {
  children: ReactNode;
  color?: ColorTokens;
  hoverOpacity?: number;
  $textDecoration?: string;
}