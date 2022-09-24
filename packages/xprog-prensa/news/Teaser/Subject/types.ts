import { ReactNode } from 'react'

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
  variant?: SubjectVariant;
}

interface SubjectProps extends SubjectContainerProps {
  css?: CSSType;
  subject?: string;
  variant?: SubjectVariant;
}

type SubjectVariant = CSSVariant

export {
  SubjectContainerProps,
  SubjectTextProps,
  SubjectProps,
  SubjectVariant
}