import { ReactNode } from 'react'

import { PrensaEngineCSSProp } from '../../../types'
import { TypographyVariantType } from '../../../types'

interface ContainerProps {
  children?: ReactNode,
  customCss?: PrensaEngineCSSProp,
  customProps?: any,
  defaultCss?: PrensaEngineCSSProp
}

export interface ItemProps extends ContainerProps {
  children?: any,
  className?: string,
  name: string,
  path: string
}

export interface ItemLabelProps {
  children?: ReactNode,
  customCss?: any,
  defaultCss?: any,
  name: string,
  path: string,
  variants?: TypographyVariantType | [TypographyVariantType, TypographyVariantType]
}