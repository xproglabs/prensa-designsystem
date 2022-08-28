import { ReactNode } from 'react'
import { DrawerBackdropType, DrawerContainerType, DrawerContentType, DrawerSpacerType } from './styles'

export type DrawerProps = {
  close: () => void;
  open: boolean;
  children?: ReactNode;
  css?: { backdrop?: {}; container?: {}; content?: {}; spacer?: {}; };
  innerSpace?: 'sm' | 'md' | 'lg';
  size?: 'maxcontent' | 'sm' | 'md' | 'lg' | 'fullwidth';
}
export type DrawerContainerProps = DrawerContainerType
export type DrawerContentProps = DrawerContentType
export type DrawerBackdropProps = DrawerBackdropType
export type DrawerSpacerProps = DrawerSpacerType