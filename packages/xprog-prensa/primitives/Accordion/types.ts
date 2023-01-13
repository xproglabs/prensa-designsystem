import { ComponentProps, VariantProps } from '@stitches/react'
import { ReactNode, MouseEventHandler } from 'react'

import { PrensaEngineCSSProp } from '../../types'
import { LinkProps } from '../Link/types'
import { AccordionContentType, AccordionGroupType } from './styles'

export type AccordionContentProps = ComponentProps<AccordionContentType>
export type AccordionContentVariants = VariantProps<AccordionContentType>

export type AccordionGroupProps = ComponentProps<AccordionContentType>
export type AccordionGroupVariants = VariantProps<AccordionGroupType>

export type AccordionItemGroupCSSProp = {
  accordionItemGroupContainer?: PrensaEngineCSSProp;
  accordionTitle?: { title?: PrensaEngineCSSProp; iconButton?: PrensaEngineCSSProp; icon?: PrensaEngineCSSProp; };
  accordionContent?: PrensaEngineCSSProp;
}

export type AccordionCSSProps = {
  accordionGroup?: PrensaEngineCSSProp;
  accordionItemGroup?: AccordionItemGroupCSSProp;
}

export type AccordionItemGroupProps = {
  id: string;
  title: string;
  accordionTitleAs?: any;
  accordionTitleVariant?: any;
  accordionContentAs?: any;
  customLink?: any;
  customLinkProps?: LinkProps;
  children?: ReactNode;
  css?: AccordionItemGroupCSSProp;
  expanded?: boolean;
  href?: string;
  icon?: ReactNode;
  iconExpandedState?: ReactNode;
  iconNotExpandedState?: ReactNode;
  innerSpace?: AccordionContentVariants['innerSpace'];
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type AccordionProps = {
  customLink?: any;
  customLinkProps?: any;
  children?: ReactNode;
  css?: AccordionCSSProps;
  innerSpace?: AccordionContentVariants['innerSpace'];
  items?: Array<AccordionItemGroupProps>;
  size?: AccordionGroupVariants['size'];
}