import { ReactNode, MouseEventHandler } from 'react'

import { AccordionContentVariants } from './content'
import { AccordionGroupVariants } from './group'
import { PrensaEngineCSSProp } from '../../types'
import { LinkProps } from '../Link/types'

export type AccordionItemGroupCSS = {
  accordionItemGroupContainer?: PrensaEngineCSSProp;
  accordionTitle?: { title?: PrensaEngineCSSProp; iconButton?: PrensaEngineCSSProp; icon?: PrensaEngineCSSProp; };
  accordionContent?: PrensaEngineCSSProp;
}

export type AccordionCSS = {
  accordionGroup?: PrensaEngineCSSProp;
  accordionItemGroup?: AccordionItemGroupCSS;
}

export interface IAccordionItemGroup {
  id: string;
  title: string;
  accordionTitleAs?: any;
  accordionTitleVariant?: any;
  accordionContentAs?: any;
  customLink?: any;
  customLinkProps?: LinkProps;
  children?: ReactNode;
  css?: AccordionItemGroupCSS;
  expanded?: boolean;
  href?: string;
  icon?: ReactNode;
  iconExpandedState?: ReactNode;
  iconNotExpandedState?: ReactNode;
  innerSpace?: AccordionContentVariants['innerSpace'];
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface IAccordion {
  accordionTitleAs?: any;
  accordionTitleVariant?: any;
  accordionContentAs?: any;
  customLink?: any;
  customLinkProps?: any;
  children?: ReactNode;
  css?: AccordionCSS;
  icon?: ReactNode;
  iconExpandedState?: ReactNode;
  iconNotExpandedState?: ReactNode;
  innerSpace?: AccordionContentVariants['innerSpace'];
  items?: Array<IAccordionItemGroup>;
  size?: AccordionGroupVariants['size'];
}