import { ElementType, FC, ReactNode } from 'react'

import {
  PrensaEngineCSSProp,
  TypographyVariantType
} from '../../types'
import {
  TitleContainerProps,
  TitleStyledProps,
  TitleProps,
} from './Title/types'

type BlockType = {
  className?: string;
}

type CSSType = PrensaEngineCSSProp

type CSSVariant = TypographyVariantType

interface ContainerDefaultProps {
  className?: string;
  css?: CSSType;
  defaultCss?: CSSType;
}

interface TeaserDefaultProps {
  title?: string;
  path?: string;
  type?: string;
}

type TeaserDefaultType = ElementType

interface TeaserLabelProps extends ContainerDefaultProps {
  children?: ReactNode;
  customProps?: BlockType;
  // variants?: CSSVariant | [CSSVariant, CSSVariant];
}

interface TeaserStyledProps extends ContainerDefaultProps {
  children?: ReactNode;
  customProps?: BlockType;
}

interface TeaserProps extends TeaserDefaultProps, TeaserStyledProps {
  css?: CSSType;
  components?: {
    title?: FC<TitleProps>;
  };
  title?: string;
  titleVariant?: CSSVariant;
}

export {
  BlockType,
  CSSType,
  CSSVariant,
  ContainerDefaultProps,
  TeaserDefaultProps,
  TeaserDefaultType,
  TeaserLabelProps,
  TeaserStyledProps,
  TeaserProps,
  TitleContainerProps,
  TitleStyledProps,
  TitleProps
}