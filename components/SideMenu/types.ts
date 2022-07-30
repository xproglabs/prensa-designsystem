import { ColorTokens } from '@prensa_tokens'
import { ReactNode, MouseEvent } from 'react'

type SideMenuPositions = 'left' | 'right'
type SideMenuClickFunction = (event: MouseEvent<HTMLElement>, value: any) => void
type SideMenuWidth = [string, string];
type SideMenuHeight = [string, string] | string
/**
 * Prensa | SideMenu API
 */
export interface SideMenuProps {
  amp: boolean;
  backgroundColor?: ColorTokens;
  children?: ReactNode;
  close?: SideMenuClickFunction;
  height?: SideMenuHeight;
  id?: string;
  layout?: string;
  menuAnchor?: SideMenuPositions;
  open?: boolean;
  px?: string;
  py?: string;
  width?: SideMenuWidth;
}
export interface SideMenuAmpProps {
  backgroundColor?: ColorTokens;
  children?: ReactNode;
  height?: SideMenuHeight;
  id?: string;
  layout?: string;
  menuAnchor?: SideMenuPositions;
  px?: string;
  py?: string;
  theme?: any;
  width?: SideMenuWidth;
}
export interface SideMenuWebProps {
  backgroundColor?: ColorTokens;
  children?: ReactNode;
  close?: SideMenuClickFunction;
  height?: SideMenuHeight;
  menuAnchor?: SideMenuPositions;
  open?: boolean;
  px?: string;
  py?: string;
  theme?: any;
  width?: SideMenuWidth;
}
export type BackdropProps = {
  className?: string;
  hidden?: boolean;
  onClick?: SideMenuClickFunction;
  open: boolean;
}
export type ContentProps = {
  children?: ReactNode;
  className?: string;
  hidden?: boolean;
  menuAnchor?: SideMenuPositions;
  open?: boolean;
  px?: string;
  py?: string;
  $backgroundColor?: ColorTokens;
  $height?: SideMenuHeight;
  $width?: SideMenuWidth;
}
export type AmpMenuContainerProps = {
  children?: ReactNode;
  px?: string;
  py?: string;
  $backgroundColor?: ColorTokens;
  $height?: SideMenuHeight;
  $width?: SideMenuWidth;
}
export type WebMenuContainerProps = {
  children?: ReactNode;
}
