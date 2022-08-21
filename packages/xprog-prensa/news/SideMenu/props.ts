import { ReactNode } from 'react'

export interface SideMenuProps {
  close: () => void;
  open: boolean;
  children?: ReactNode;
  css?: { backdrop?: {}; container?: {}; content?: {}; spacer?: {}; };
  innerSpace?: 'sm' | 'md' | 'lg';
  size?: 'maxcontent' | 'sm' | 'md' | 'lg' | 'fullwidth';
}