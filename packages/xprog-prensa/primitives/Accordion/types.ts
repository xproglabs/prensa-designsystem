import { PrensaEngineCSS } from '@xprog/prensa-system/types'
import { ReactNode, MouseEventHandler } from 'react'

import { AccordionContentVariants } from './content'
import { AccordionGroupVariants } from './group'
import { LinkProps } from '../Link/types'

export type AccordionItemGroupCSS = {
  accordionItemGroupContainer?: PrensaEngineCSS;
  accordionTitle?: {
    title?: PrensaEngineCSS;
    iconButton?: PrensaEngineCSS;
    icon?: PrensaEngineCSS;
  };
  accordionContent?: PrensaEngineCSS;
}

export type AccordionCSS = {
  accordionGroup?: PrensaEngineCSS;
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