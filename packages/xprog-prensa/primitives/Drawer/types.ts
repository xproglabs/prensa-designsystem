import { VariantProps } from '@stitches/react'
import { ReactNode, MouseEventHandler } from 'react'

import { PrensaEngineCSSProp } from '../../types'
import { DrawerBackdropType, DrawerContainerType, DrawerContentType, DrawerSpacerType } from './styles'

type DrawerContentTypeVariants = VariantProps<DrawerContentType>
type DrawerSpacerTypeVariants = VariantProps<DrawerSpacerType>

type DrawerCSSProp = {
  backdrop?: PrensaEngineCSSProp;
  container?: PrensaEngineCSSProp;
  content?: PrensaEngineCSSProp;
  spacer?: PrensaEngineCSSProp;
}

export type DrawerProps = {
  anchor: DrawerContentTypeVariants['anchor'];
  close: MouseEventHandler<HTMLDivElement>;
  open: boolean;
  children?: ReactNode;
  css?: DrawerCSSProp;
  innerSpace?: DrawerSpacerTypeVariants['innerSpace'];
  size?: DrawerContentTypeVariants['size'];
}
export type DrawerContainerProps = DrawerContainerType
export type DrawerContentProps = DrawerContentType
export type DrawerBackdropProps = DrawerBackdropType
export type DrawerSpacerProps = DrawerSpacerType