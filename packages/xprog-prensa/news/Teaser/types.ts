import { ElementType, FC, ReactNode } from 'react'

import {
  PrensaEngineCSSProp,
  TypographyVariantType
} from '../../types'
import {
  ImageContainerProps,
  ImageTextProps,
  ImageProps,
  ImageVariant
} from './Image/types'
import {
  SubjectContainerProps,
  SubjectTextProps,
  SubjectProps,
  SubjectVariant
} from './Subject/types'
import {
  SubtitleContainerProps,
  SubtitleTextProps,
  SubtitleProps,
  SubtitleVariant
} from './Subtitle/types'
import {
  TitleContainerProps,
  TitleTextProps,
  TitleProps,
  TitleVariant
} from './Title/types'

type BlockType = {
  className?: string;
}

type CSSType = PrensaEngineCSSProp

type CSSVariant = TypographyVariantType

interface ContainerDefaultProps {
  css?: CSSType;
  className?: string;
  defaultCss?: CSSType;
}

interface TeaserDefaultProps {
  path?: string;
  title?: string;
  type?: string;
}

type TeaserDefaultType = ElementType

interface TeaserLabelProps extends ContainerDefaultProps {
  children?: ReactNode;
  customProps?: BlockType;
}

interface TeaserStyledProps extends ContainerDefaultProps {
  children?: ReactNode;
  customProps?: BlockType;
}

interface TeaserProps extends TeaserDefaultProps, TeaserStyledProps {
  css?: CSSType;
  components?: {
    image?: FC<ImageProps>;
    subject?: FC<SubjectProps>;
    subtitle?: FC<SubtitleProps>;
    title?: FC<TitleProps>;
  };
  image?: string;
  subject?: string;
  subjectVariant?: SubjectVariant;
  subtitle?: string;
  subtitleVariant?: SubtitleVariant;
  title?: string;
  titleVariant?: TitleVariant;
}

export {
  BlockType,
  CSSType,
  CSSVariant,
  ContainerDefaultProps,
  ImageContainerProps,
  ImageTextProps,
  ImageProps,
  ImageVariant,
  SubjectContainerProps,
  SubjectTextProps,
  SubjectProps,
  SubjectVariant,
  SubtitleContainerProps,
  SubtitleTextProps,
  SubtitleProps,
  SubtitleVariant,
  TeaserDefaultProps,
  TeaserDefaultType,
  TeaserLabelProps,
  TeaserStyledProps,
  TeaserProps,
  TitleContainerProps,
  TitleTextProps,
  TitleProps,
  TitleVariant
}