import { PrensaEngineTypeof } from '@xprog/prensa-system'
import { ReactNode } from 'react'

import { BlockType, CSSType, CSSVariant, ContainerDefaultProps } from '../types'

interface SubjectContainerProps extends ContainerDefaultProps {
  children?: ReactNode;
  customProps?: BlockType;
}

interface SubjectTextProps extends SubjectContainerProps {
  variant?: CSSVariant;
}

interface SubjectProps extends SubjectContainerProps {
  bgColor?: keyof PrensaEngineTypeof['config']['theme']['colors'];
  color?: keyof PrensaEngineTypeof['config']['theme']['colors'];
  css?: CSSType;
  icon?: {
    enabled: boolean;
    useIcon: () => void
  };
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