import { LinkProps } from '../../../primitives/Link/types'
import { BlockType, CSSType, CSSVariant, ContainerDefaultProps } from '../types'

interface DateContainerProps extends ContainerDefaultProps {
  children?: any;
  customProps?: BlockType;
}

interface DateProps extends DateContainerProps {
  css?: CSSType;
  publishedDate?: string;
  variant?: CSSVariant;
}

type PublishedDateCSSType = CSSType;
type PublishedDateVariant = CSSVariant

export {
  DateContainerProps,
  DateProps,
  PublishedDateCSSType,
  PublishedDateVariant
}