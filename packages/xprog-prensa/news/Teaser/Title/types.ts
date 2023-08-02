import { LinkProps } from '../../../primitives/Link/types'
import { PrensaEngineColorType } from '../../../types'
import { BlockType, CSSType, CSSVariant, ContainerDefaultProps } from '../types'

interface TitleContainerProps extends ContainerDefaultProps {
  children?: any;
  customProps?: BlockType;
}

interface TitleTextProps extends TitleContainerProps {
  variant?: CSSVariant;
}

interface TitleProps extends TitleContainerProps {
  customLink: any;
  css?: CSSType;
  customLinkProps?: LinkProps;
  color?: PrensaEngineColorType;
  icon?: {
    enabled: boolean;
    name: string;
    useIcon: (P: { icon: string; color: string }) => void;
  };
  linkProps?: LinkProps;
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