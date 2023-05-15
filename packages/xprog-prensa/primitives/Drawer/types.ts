import { VariantProps } from '@stitches/react'
import { PrensaEngineCSS } from '@xprog/prensa-system/types'
import { ReactNode, MouseEventHandler } from 'react'

import { DrawerBackdropType, DrawerContainerType, DrawerContentType, DrawerSpacerType } from './styles'

type DrawerContentTypeVariants = VariantProps<DrawerContentType>
type DrawerSpacerTypeVariants = VariantProps<DrawerSpacerType>

type DrawerCSSProp = {
  backdrop?: PrensaEngineCSS;
  container?: PrensaEngineCSS;
  content?: PrensaEngineCSS;
  spacer?: PrensaEngineCSS;
}

export type DrawerProps = {
  close: MouseEventHandler<HTMLDivElement>;
  open: boolean;
  anchor?: DrawerContentTypeVariants['anchor'];
  children?: ReactNode;
  css?: DrawerCSSProp;
  innerSpace?: DrawerSpacerTypeVariants['innerSpace'];
  size?: DrawerContentTypeVariants['size'];
}
export type DrawerContainerProps = DrawerContainerType
export type DrawerContentProps = DrawerContentType
export type DrawerBackdropProps = DrawerBackdropType
export type DrawerSpacerProps = DrawerSpacerType