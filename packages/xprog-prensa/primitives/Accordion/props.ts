import { ReactNode, MouseEventHandler } from 'react'

import { AccordionGroupVariants } from './styles'

export type AccordionItemCSSProp = {
  accordionButton?: { button?: any; label?: any; };
  accordionContent?: any;
  accordionTitle?: any;
}

export type AccordionCSSProps = {
  accordionGroup?: any;
  accordionItem?: AccordionItemCSSProp;
}

export type AccordionItem = {
  id: string;
  title: string;
  titleAs?: any;
  expanded: boolean;
  children?: ReactNode;
}

export type AccordionItemGroupProps = {
  expanded: boolean;
  id: string;
  title: string;
  children?: ReactNode;
  css?: AccordionItemCSSProp
  iconExpandedState?: ReactNode;
  iconFixed?: ReactNode;
  iconNotExpandedState?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  titleAs?: any;
}

export type AccordionProps = {
  children?: ReactNode;
  css?: AccordionCSSProps;
  items?: Array<AccordionItemGroupProps>;
  size?: AccordionGroupVariants['size'];
}