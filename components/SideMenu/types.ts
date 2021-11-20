import { ColorTokens } from '@prensa_tokens'
import { ReactNode, MouseEvent } from 'react'

type SideMenuPositions = 'left' | 'right'
type SideMenuClickFunction = (event: MouseEvent<HTMLElement>, value: any) => void

export interface SideMenuProps {
  amp: boolean;
  backgroundColor?: ColorTokens;
  children?: ReactNode;
  close: SideMenuClickFunction;
  menuAnchor?: SideMenuPositions;
  open: boolean;
  px?: string;
  py?: string;
  width?: string;
}
export interface SideMenuAmpProps {
  backgroundColor?: ColorTokens;
  children?: ReactNode;
  close: SideMenuClickFunction;
  menuAnchor?: SideMenuPositions;
  open: boolean;
  px?: string;
  py?: string;
  theme?: any;
  width?: string;
}
export interface SideMenuWebProps {
  backgroundColor?: ColorTokens;
  children?: ReactNode;
  close: SideMenuClickFunction;
  menuAnchor?: SideMenuPositions;
  open: boolean;
  px?: string;
  py?: string;
  theme?: any;
  width?: string;
}

export type ContentProps = {
  menuAnchor?: SideMenuPositions;
  px?: string;
  py?: string;
  theme?: any;
  $backgroundColor?: ColorTokens;
  $width?: string;
}
export type BackdropProps = {
  onClick?: SideMenuClickFunction;
}

