import { ElementType, FC, ReactNode } from 'react'

import {
  PrensaEngineCSSProp,
  PrensaEngineColorType,
  TypographyVariantType
} from '../../types'
import {
  ImageContainerProps,
  ImageDerivative,
  ImageFileProps,
  ImageProps,
  ImageVariant
} from './Image/types'
import {
  RelatedContainerProps,
  RelatedProps
} from './Related/types'
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

interface TeaserProps extends TeaserDefaultProps, TeaserStyledProps {
  css?: CSSType;
  components?: {
    image?: FC<ImageProps>;
    related?: FC<RelatedProps>;
    subject?: FC<SubjectProps>;
    subtitle?: FC<SubtitleProps>;
    title?: FC<TitleProps>;
  };
  image?: string;
  imageDerivative?: ImageDerivative;
  imageVariant?: ImageVariant;
  path?: string,
  relatedItems?: TeaserProps[];
  relatedLayout?: TeaserProps;
  subject?: string;
  subjectBgColor?: PrensaEngineColorType;
  subjectColor?: PrensaEngineColorType;
  subjectCss?: CSSType;
  subjectTextVariant?: CSSVariant;
  subjectVariant?: SubjectVariant;
  subtitle?: string;
  subtitleVariant?: SubtitleVariant;
  title?: string;
  titleVariant?: TitleVariant;
}

interface TeaserStyledProps extends ContainerDefaultProps {
  children?: ReactNode;
  customProps?: BlockType;
}

interface TeaserWrapProps extends ContainerDefaultProps {
  children?: ReactNode;
  customProps?: BlockType;
}

export {
  BlockType,
  CSSType,
  CSSVariant,
  ContainerDefaultProps,
  ImageContainerProps,
  ImageDerivative,
  ImageFileProps,
  ImageProps,
  ImageVariant,
  RelatedContainerProps,
  RelatedProps,
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
  TeaserProps,
  TeaserStyledProps,
  TeaserWrapProps,
  TitleContainerProps,
  TitleTextProps,
  TitleProps,
  TitleVariant
}