import { PrensaEngineTypeof } from '@xprog/prensa-system'

import { LinkProps } from '../../../primitives/Link/types'
import { BlockType, CSSType, CSSVariant, ContainerDefaultProps } from '../types'

interface DateContainerProps extends ContainerDefaultProps {
  children?: any;
  customProps?: BlockType;
}

interface DateProps extends DateContainerProps {
  customLink?: any;
  css?: CSSType;
  customLinkProps?: LinkProps;
  linkProps?: LinkProps;
  path?: string;
  publishedDate?: number;
  variant?: CSSVariant;
}
type PublishedDateVariant = CSSVariant

export {
  DateContainerProps,
  DateProps,
  PublishedDateVariant
}