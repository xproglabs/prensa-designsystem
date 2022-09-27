import { ReactNode } from 'react'

import { BlockType, PageBlockCSSType } from '../types'

export interface ContainerDefaultProps {
  className?: string;
  children?: ReactNode;
  css?: PageBlockCSSType;
  defaultCss?: PageBlockCSSType;
}

export interface ContainerProps extends ContainerDefaultProps {
  customProps?: BlockType;
}