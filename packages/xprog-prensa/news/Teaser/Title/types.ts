import { ReactNode } from 'react'

import { PrensaEngineColorType } from '../../../types'
import {
  BlockType,
  CSSType,
  CSSVariant,
  ContainerDefaultProps
} from '../types'

interface TitleContainerProps extends ContainerDefaultProps {
  children?: ReactNode;
  customProps?: BlockType;
}

interface TitleTextProps extends TitleContainerProps {
  variant?: CSSVariant;
}

interface TitleProps extends TitleContainerProps {
  css?: CSSType;
  customLink: any;
  customLinkProps: any;
  color?: PrensaEngineColorType;
  icon?: {
    enabled: boolean;
    name: string;
    useIcon: (P: { name: string; color: string }) => void;
  };
  path?: string;
  title?: string;
  variant?: CSSVariant;
}

type TitleVariant = CSSVariant

export {
  TitleContainerProps,
  TitleTextProps,
  TitleProps,
  TitleVariant
}