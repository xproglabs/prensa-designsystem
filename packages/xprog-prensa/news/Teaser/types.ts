import { ElementType, FC, ReactNode } from 'react'

import {
  PrensaEngineCSSProp,
  PrensaEngineColorType,
  TypographyVariantType
} from '../../types'
import {
  ImageContainerProps,
  ImageDerivative,
  ImageWrapProps,
  ImageObjectProps,
  ImageProps,
  ImageVariant
} from './Image/types'
import {
  NumberContainerProps,
  NumberCSSType,
  NumberTextProps,
  NumberProps,
  NumberVariant
} from './Number/types'
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
    number?: FC<NumberProps>;
    related?: FC<RelatedProps>;
    subject?: FC<SubjectProps>;
    subtitle?: FC<SubtitleProps>;
    title?: FC<TitleProps>;
  };
  customLink?: any;
  customLinkProps?: any;
  image?: ImageObjectProps;
  imageLink?: any;
  imageLinkProps?: any;
  imageDerivative?: ImageDerivative;
  imageVariant?: ImageVariant;
  numberBgColor?: PrensaEngineColorType;
  numberColor?: PrensaEngineColorType;
  numberValue?: string;
  numberVariant?: NumberVariant;
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
  wrapImage?: ElementType;
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
  ImageWrapProps,
  ImageProps,
  ImageVariant,
  NumberContainerProps,
  NumberCSSType,
  NumberTextProps,
  NumberProps,
  NumberVariant,
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