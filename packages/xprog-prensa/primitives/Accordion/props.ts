import { ReactNode, MouseEventHandler } from 'react'

import { AccordionGroupVariants } from './styles'

export type AccordionItemGroupCSSProp = {
  accordionTitle?: { button?: any; label?: any; };
  accordionContent?: any;
}

export type AccordionCSSProps = {
  accordionGroup?: any;
  accordionItemGroup?: AccordionItemGroupCSSProp;
}

export type AccordionItemGroupProps = {
  expanded: boolean;
  id: string;
  title: string;
  children?: ReactNode;
  css?: AccordionItemGroupCSSProp
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