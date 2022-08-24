import { ReactNode, MouseEventHandler } from 'react'

import { AccordionGroupVariants } from './styles'

interface AccordionItemCSSProp {
  accordionButton?: { button?: any; label?: any; };
  accordionContent?: any;
  accordionTitle?: any;
}

interface AccordionCSSProps {
  accordionGroup?: any;
  accordionItem?: AccordionItemCSSProp;
}

interface AccordionItem {
  id: string;
  title: string;
  expanded: boolean;
  children?: ReactNode;
  itk?: number;
}

export interface AccordionItemProps {
  id: string;
  title: string;
  expanded: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  iconExpandedState?: ReactNode;
  iconNotExpandedState?: ReactNode;
  css?: AccordionItemCSSProp
}

export interface AccordionProps {
  children?: ReactNode;
  css?: AccordionCSSProps;
  iconExpandedState?: ReactNode;
  iconNotExpandedState?: ReactNode;
  items?: Array<AccordionItem>;
  size?: AccordionGroupVariants['size'];
}