import { ReactNode } from 'react'

import { PrensaEngineColorType } from '../../../types';
import {
  BlockType,
  CSSType,
  CSSVariant,
  ContainerDefaultProps
} from '../types'

interface SubjectContainerProps extends ContainerDefaultProps {
  children?: ReactNode;
  customProps?: BlockType;
}

interface SubjectTextProps extends SubjectContainerProps {
  variant?: CSSVariant;
}

interface SubjectProps extends SubjectContainerProps {
  bgColor?: PrensaEngineColorType;
  color?: PrensaEngineColorType;
  css?: CSSType;
  subject?: string;
  textVariant?: CSSVariant;
  variant?: SubjectVariant;
}

type SubjectCSSType = CSSType;
type SubjectVariant = 'default' | 'filled'

export {
  SubjectContainerProps,
  SubjectCSSType,
  SubjectTextProps,
  SubjectProps,
  SubjectVariant
}